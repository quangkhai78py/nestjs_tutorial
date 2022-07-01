import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { user_error } from './user.constant';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * @description This is function get detail user.
   * @param id
   */
  public async getDetailUser(id: string): Promise<Partial<any>> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new HttpException(user_error, HttpStatus.BAD_REQUEST);
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
