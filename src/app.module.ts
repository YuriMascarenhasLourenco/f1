import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PilotsModule } from './pilots/pilots.module';

@Module({
  imports: [TeamsModule, PilotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
