import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly TeamsService: TeamsService) {}
  @Get()
  getTeams() {
    return this.TeamsService;
  }
}
