import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
interface UserPostRequest {
  userName: string;
  name: string;
  email: string;
  password: string;
}
interface UserDeleteRequest {
  id: number;
}
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findall(@Param() params: { id: number }): Promise<UserModel[]> {
    return this.userService.getAllUsers();
  }
  @Post()
  async signupUser(@Body() userData: UserPostRequest): Promise<UserModel> {
    console.log(userData);
    return this.userService.createUser(userData);
  }
  @Delete()
  deleteUserByID(@Body() userData: UserDeleteRequest) {
    return this.userService.deleteUser(userData.id);
  }
}
