import { Controller, Get, Param } from '@nestjs/common'
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) {}

    @Get('exists/:id')
    isExists(@Param('id') id: [string, number]): string {
        return this.UserService.isExists(id)
    }
}