import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { RedisService } from '../../../shares/service/redis/redis.service';
import { jwt_config } from '../../../config/constant.config';
import { redis_prefix } from '../auth.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly redisService: RedisService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwt_config.SECRET,
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    try {
      const key = `${redis_prefix}${payload.user_id}`;
      const check = await this.redisService.get(key);
      if (!check) return done(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED), false);
      return done(null, payload);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
