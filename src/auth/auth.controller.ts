import {Controller, Body,Post, Req} from "@nestjs/common"
import { Request } from "express"
import { AuthService } from "./auth.service"
import { AuthDto } from "./dto"

@Controller('auth')

export class AuthController{
    constructor(private authService:AuthService){}

    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authService.signup()
    }

    @Post('login')
    login(){
        return this.authService.login()
    }
}