import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProduct() {
    return [{ id: 1, name: 'RAM Memory', type: 'hardware' }];
  }
}
