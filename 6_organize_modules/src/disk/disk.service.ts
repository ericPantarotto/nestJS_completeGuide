import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Drawing watts of power from disk service');
    this.powerService.supplyPower(20);
    return 'Disk data';
  }
}
