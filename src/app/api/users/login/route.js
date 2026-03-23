import { NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { getUserByEmail, updateUserLastLogin } from '@/lib/users-repo';
import { signJwt, cookieName, cookieMaxAge } from '@/lib/auth';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = schema.parse(body);

    // Hardcode demo accounts for immediate access
    if (email === 'admin@college.edu' && password === 'admin123') {
      const token = signJwt({ sub: 'demo_admin', email: 'admin@college.edu', role: 'admin' });
      const response = NextResponse.json({ id: 'demo_admin', email: 'admin@college.edu', name: 'Demo Admin', role: 'admin' }, { status: 200 });
      
      response.cookies.set({
        name: cookieName,
        value: token,
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: cookieMaxAge,
      });
      return response;
    }

    if (email === 'student@college.edu' && password === 'student123') {
      const token = signJwt({ sub: 'demo_student', email: 'student@college.edu', role: 'student' });
      const response = NextResponse.json({ id: 'demo_student', email: 'student@college.edu', name: 'Demo Student', role: 'student' }, { status: 200 });
      
      response.cookies.set({
        name: cookieName,
        value: token,
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: cookieMaxAge,
      });
      return response;
    }

    // Attempt real database login
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { message: 'Database is not configured. Please use demo accounts.' }, 
        { status: 401 }
      );
    }

    // Find user by email
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, 
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash ?? '');
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, 
        { status: 401 }
      );
    }

    // Create JWT token
    const token = signJwt({ 
      sub: user._id, 
      email: user.email, 
      role: user.role 
    });

    // Update last login time
    if (user._id) {
      await updateUserLastLogin(user._id);
    }

    // Create response with user data
    const response = NextResponse.json(
      { 
        id: user._id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      }, 
      { status: 200 }
    );

    // Set HTTP-only cookie
    response.cookies.set({
      name: cookieName,
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: cookieMaxAge,
    });

    return response;
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid input', 
          errors: err.errors 
        }, 
        { status: 400 }
      );
    }
    
    console.error('Login error:', err);
    return NextResponse.json(
      { message: 'Internal server error' }, 
      { status: 500 }
    );
  }
}