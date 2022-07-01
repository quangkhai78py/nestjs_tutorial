import { Module } from '@nestjs/common';
import * as RedisClient from 'ioredis';
import { RedisService } from './redis.service';
import { redis_config } from '../../../config/constant.config';

@Module({
  imports: [],
  providers: [{
    provide: 'REDIS_CONNECTION',
    useFactory: async (): Promise<RedisClient.Redis> => new RedisClient(redis_config.URI),
  }, RedisService],
  exports: [RedisService],
})

export class RedisModule {}
