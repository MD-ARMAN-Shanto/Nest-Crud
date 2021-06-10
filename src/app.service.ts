import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Arman, Welcome to NEST.JS!';
  }
}
