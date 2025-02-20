import { Module } from '@nestjs/common';
import { PilotsController } from './pilots.controller';
import { PilotsService } from './pilots.service';
import { pilots } from 'src/data/pilots';

@Module({
  controllers: [PilotsController],
  providers: [PilotsService, { provide: 'pilots', useValue: pilots }],
})
export class PilotsModule {}
