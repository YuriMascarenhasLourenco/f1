import { Controller, Get, Param } from '@nestjs/common';
import { PilotsService } from './pilots.service';

@Controller('pilots')
export class PilotsController {
  constructor(private readonly pilotService: PilotsService) {}
  @Get()
  getDrivers() {
    return;
  }
  @Get(':id')
  getPilot(@Param('id') id: string) {
    return this.pilotService.getPilot(+id);
  }
}
