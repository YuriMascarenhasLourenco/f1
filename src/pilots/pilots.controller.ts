import { Controller, Get } from '@nestjs/common';

@Controller('pilots')
export class PilotsController {
  @Get()
  getDrivers() {
    return;
  }
}
