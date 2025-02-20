import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { teams } from 'src/data/teams';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService, { provide: 'teams', useValue: teams }],
})
export class TeamsModule {}
