import { Inject, Injectable } from '@nestjs/common';
import { Pilots } from 'src/data/types/pilots.interface';

@Injectable()
export class PilotsService {
  constructor(@Inject('pilots') private readonly pilots: Pilots[]){}
  getDrivers() {
    return this.pilots
  }
}
