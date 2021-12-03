import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/User.controller';
import { PersonController } from './person/Person.controller';
import { UserService } from './user/user.service';
import { PrismaService } from '../prisma.service';
import { LoginController } from './login/Login.controller';
import { LoginService } from './login/login.service';

@Module({
  imports: [],
  controllers: [UserController, PersonController, LoginController],
  providers: [AppService, UserService, PrismaService, LoginService],
})
export class AppModule {}
