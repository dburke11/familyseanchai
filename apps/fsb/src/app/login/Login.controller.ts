import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';

interface AuthReq {
  email: string;
  password: string;
}

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async auth(@Body() cred: AuthReq, @Res() res: Response): Promise<void> {
    console.log(cred);
    try {
      const user = await this.loginService.authenticateUser(cred);
      res.status(HttpStatus.OK).send(user);
      console.log(user);
    } catch {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
