import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { auth_error } from '../auth.constant';
import { Match } from '../../../shares/decorator/match.decorator';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @ApiProperty({ type: 'email' })
  @IsNotEmpty({
    message: 'Email is mandatory',
  })
  @IsEmail({}, { message: 'Email incorrect. Please try again!' })
  @MinLength(8, { message: 'Email must be at least 8 characters long' })
  @MaxLength(127, { message: 'Email can be max 127 characters long' })
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
  @MaxLength(127, { message: auth_error.PASSWORD_MAX_LENGTH })
  @Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: auth_error.PASSWORD_INCLUDE,
  })
  @Transform(({ value }) => value.trim())
  password: string;

  //

  @ApiProperty({
    minimum: 8,
    maximum: 35,
    description: 'At least 1 capital, 1 small, 1 special character & 1 number',
  })
  @IsString()
  @IsNotEmpty({
    message: 'Confirm Password is mandatory',
  })
  @MinLength(8, { message: auth_error.PASSWORD_MIN_LENGTH })
  @MaxLength(127, { message: auth_error.PASSWORD_MAX_LENGTH })
  @Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: auth_error.PASSWORD_INCLUDE,
  })
  @Transform(({ value }) => value.trim())
  @Match(SignUpDto, (s) => s.password, {
    message: 'Password and Confirm password do not match. Please try again',
  })
  confirm_password: string;

  //

  @ApiProperty()
  @IsNotEmpty({
    message: 'First name is mandatory',
  })
  @IsString()
  @MinLength(1, { message: 'First name must be at least 1 characters long' })
  @MaxLength(127, { message: 'First name can be max 127 characters long' })
  @Transform(({ value }) => value.trim())
  first_name: string;

  //

  @ApiProperty()
  @IsNotEmpty({
    message: 'Last name is mandatory',
  })
  @IsString()
  @MinLength(1, { message: 'Last name must be at least 1 characters long' })
  @MaxLength(127, { message: 'Last name can be max 127 characters long' })
  @Transform(({ value }) => value.trim())
  last_name: string;
}
