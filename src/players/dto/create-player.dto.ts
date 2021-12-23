 import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator"

 export class CreatePlayerDto {
   @IsString()
   phone: string
   @IsString()
   name: string
   @IsEmail()
   email: string
   @IsString()
   password: string
   @IsString()
   ranking: string
   @IsNumber()
   posRanking: number
   @IsString()
   @IsOptional()
   playerImg: string
 }

