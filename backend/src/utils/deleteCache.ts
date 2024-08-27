import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

export class DeleteCache {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  // soon
}
