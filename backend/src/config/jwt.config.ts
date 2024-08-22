import * as dotenv from 'dotenv';

dotenv.config();

export const JWT_CONFIG = {
  secret: process.env.PRIVATE_KEY || 'SECRET',
  signOptions: {
    expiresIn: '24h',
  },
};
