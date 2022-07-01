import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { auth_error, redis_prefix } from './auth.constant';
import { encryptPassword, isPasswordMatch } from '../../shares/util/bcrypt.util';
import { RedisService } from '../../shares/service/redis/redis.service';
import { IUserPayload } from '../../shares/common/app.interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly redisService: RedisService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && isPasswordMatch(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  /**
   * @description This is function create user.
   * @param signUpDto
   */
  public async signUp(signUpDto: SignUpDto): Promise<User> {
    try {
      const { email, password } = signUpDto;

      // Check email exists.
      const user = await this.userRepository.findOne({ where: { email } });
      if (user) throw new HttpException(auth_error.DUPLICATE_EMAIL, HttpStatus.BAD_REQUEST);

      signUpDto.password = await encryptPassword(password);
      const newUser = await this.userRepository.create(signUpDto);
      await this.userRepository.save(newUser);

      return newUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * @description This is function login
   * @param signInDto
   */
  public async signIn(signInDto: SignInDto) {
    try {
      const { email, password } = signInDto;

      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) throw new HttpException(auth_error.USER_INVALID, HttpStatus.BAD_REQUEST);

      const compare = await bcrypt.compare(password, user.password);
      if (!compare) throw new HttpException(auth_error.WRONG_PASSWORD, HttpStatus.BAD_REQUEST);

      const token = await this.signPayload({ user_id: user.id });

      return { user, token }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * @description This is function sign payload use redis.
   * @param payload
   */
  public async signPayload(payload: any): Promise<string> {
    try {
      const token = this.jwtService.sign(payload);
      const decoded: any = this.jwtService.decode(token);
      const key = `${redis_prefix}${decoded.user_id}`;
      if (decoded.exp) {
        await this.redisService.setExpire(
          key,
          'true',
          'EX',
          Math.floor(decoded.exp - Date.now() / 1000),
        );
      } else {
        await this.redisService.set(key, 'true');
      }
      return token;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * @description This is function logout.
   * @param user
   */
  public async logout(user: IUserPayload): Promise<any> {
    try {
      const key = `${redis_prefix}${user.id}`;
      await this.redisService.del(key);
      return null;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
