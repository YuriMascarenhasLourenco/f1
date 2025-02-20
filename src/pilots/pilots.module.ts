import { Module } from '@nestjs/common';
import { PilotsController } from './pilots.controller';
import { PilotsService } from './pilots.service';

@Module({
  controllers: [PilotsController],
  providers: [PilotsService],
})
export class PilotsModule {}
