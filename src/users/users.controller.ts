import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./user.dto";

@Controller('users/api')
export class UsersController {

    constructor(private readonly _user: UserService){}

    @Post('add')
    @HttpCode(500)
    addUser(@Body() userData:CreateUserDto): {message: string, user: CreateUserDto}{
        return this._user.create(userData);
    }

    @Get('fetch')
    fetchAllUsers(): CreateUserDto[]{
        return this._user.findAll();
    }

}