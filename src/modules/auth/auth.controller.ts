import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../shares/guard/jwt.guard';
import { GetUser } from '../../shares/decorator';
import { IUserPayload } from '../../shares/common/app.interface';

@Controller('auth')
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('signup')
  signup(@Body() signUpDto: SignUpDto): Promise<any> {
    return this.authService.signUp(signUpDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @ApiBearerAuth()
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@GetUser() user: IUserPayload) {
    return this.authService.logout(user);
  }
}
