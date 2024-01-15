import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() userDto: UserDto): string {
    // Process the user data, e.g., save it to the database
    // For simplicity, we'll just return a success message
    return `User ${userDto.username} created successfully`;
  }
}
