import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pilots } from 'src/data/types/pilots.interface';

@Injectable()
export class PilotsService {
  constructor(@Inject('pilots') private readonly pilots: Pilots[]) {}
  getDrivers() {
    try {
      if (this.pilots.length > 0) {
        return this.pilots;
      }
    } catch (err) {
      throw new HttpException(
        'There is no pilots on the system',
        HttpStatus.NOT_FOUND,
      );
    }
  }
  getPilot(id: number): Pilots | null {
    return this.pilots.find((item) => item.id === id);
  }
}
