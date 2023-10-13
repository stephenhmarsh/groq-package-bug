import { Injectable } from '@nestjs/common';
import groq from 'groq';

@Injectable()
export class AppService {
  getHello(): string {
    groq`foo`;
    return 'Hello World!';
  }
}
