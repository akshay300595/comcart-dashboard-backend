import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService{
        private users: CreateUserDto[] = [];

        create(userData: CreateUserDto){
            this.users.push(userData);
            return { message: 'User added successfully', user: userData };
        }

        findAll(){
            return this.users;
        }
}