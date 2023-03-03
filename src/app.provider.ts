import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CustomProvider {
  constructor(
    @Inject('MA_CONSTANTE') private readonly maConstante: string,
    @Inject('MON_SERVICE_MOCK') private readonly monServiceMock: any, //UneInterfaceOuUneClasse
  ) {}

  getConstante() {
    return this.maConstante;
  }
}
