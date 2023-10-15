import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';

import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(@Body() body: SignUpBodyDto, res: Response) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password,
    );
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {
    return null;
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @ApiOkResponse({
    type: GetSessionInfoDto,
  })
  @Get('session')
  getSession() {
    return null;
  }
}
