import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJwt, cookieName } from '@/lib/auth';
import { getUserById } from '@/lib/users-repo';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(cookieName)?.value;
    
    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const payload = verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // Intercept demo accounts to avoid DB call
    if (payload.sub === 'demo_admin') {
      return NextResponse.json({
        user: { id: 'demo_admin', email: 'admin@college.edu', name: 'Demo Admin', role: 'admin' }
      }, { status: 200 });
    }
    if (payload.sub === 'demo_student') {
      return NextResponse.json({
        user: { id: 'demo_student', email: 'student@college.edu', name: 'Demo Student', role: 'student' }
      }, { status: 200 });
    }

    // Ensure database doesn't crash if uninitialized
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ user: payload }, { status: 200 });
    }

    // Optionally, fetch fresh user data from database
    const user = await getUserById(payload.sub);
    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json({ 
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}