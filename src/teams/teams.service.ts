import { Inject, Injectable } from '@nestjs/common';
import { Teams } from 'src/data/types/teams.interface';

@Injectable()
export class TeamsService {
  constructor(@Inject('teams') private readonly teams: Teams[]) {}
  getTeams() {
    return this.teams;
  }
}
