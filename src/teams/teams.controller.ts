import { Controller, Get } from '@nestjs/common';

@Controller('teams')
export class TeamsController {
    @Get()
    getTeams(){
        
    }
}
