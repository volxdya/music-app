import { redisStore } from 'cache-manager-redis-yet';

export const REDIS_CONFIG = {
  store: redisStore,
  isGlobal: true,
  host: process.env.REDIS_HOST,
  ttl: 1000 * 60,
  port: process.env.REDIS_PORT,
};
