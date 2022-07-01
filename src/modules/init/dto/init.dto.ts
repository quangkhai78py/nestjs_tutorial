import { IsNotEmpty } from 'class-validator';

export class InitDto {
  @IsNotEmpty({
    message: 'Password not empty',
  })
  password: string;
}
