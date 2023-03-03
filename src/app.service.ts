import { Injectable } from '@nestjs/common';

@Injectable() // pour que le service puisse être injecté dans la classe
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
