import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { auth_error } from '../auth.constant';

export class SignInDto {
  @ApiProperty({
    description: 'Email account',
  })
  @IsNotEmpty({
    message: 'Email is mandatory',
  })
  @IsEmail({}, { message: 'Email is incorrect. Please try again!' })
  @Transform(({ value }) => value.trim())
  email: string;

  //

  @ApiProperty({
    minimum: 8,
    maximum: 35,
    description: 'At least 1 capital, 1 small, 1 special character & 1 number',
  })
  @IsString()
  @IsNotEmpty({
    message: 'Password is mandatory',
  })
  @MinLength(8, { message: auth_error.PASSWORD_MIN_LENGTH })
  @MaxLength(35, { message: auth_error.PASSWORD_MAX_LENGTH })
  @Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: auth_error.PASSWORD_INCLUDE,
  })
  password: string;
}
