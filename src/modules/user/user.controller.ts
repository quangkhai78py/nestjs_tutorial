import {
  Controller,
  Get, HttpCode, Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../shares/guard/jwt.guard';

@Controller('users')
export class UserController {
  constructor(protected userService: UserService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description: 'Success',
  })
  @ApiBadRequestResponse({
    description: 'Bad request!',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error!',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.userService.getDetailUser(id);
  }
}
