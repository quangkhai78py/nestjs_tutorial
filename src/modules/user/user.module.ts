import { Global, Module } from '@nestjs/common';
import * as moment from 'moment';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwt_config } from '../../config/constant.config';
import { EXPIRED_TIME } from './user.constant';
import { RedisModule } from '../../shares/service/redis/redis.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwt_config.SECRET,
      signOptions: {
        expiresIn: moment().add(EXPIRED_TIME, 'minutes').unix(),
      },
    }),
    RedisModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
