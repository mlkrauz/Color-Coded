import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET;
const expiration = '2h';

export function authMiddleware({ req }) {
  // Allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch (err) {
    console.error(err);
    console.log('Invalid token');
  }

  return req;
}

export function signToken({ name, email, _id }) {
  const payload = { name, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
