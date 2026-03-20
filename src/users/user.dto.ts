import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;
}