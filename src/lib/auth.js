import jwt from 'jsonwebtoken';

const TOKEN_NAME = 'session';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const SECRET = process.env.JWT_SECRET || 'fallback_secret_key_12345';

export function signJwt(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: MAX_AGE });
}

export function verifyJwt(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

export const cookieName = TOKEN_NAME;
export const cookieMaxAge = MAX_AGE;