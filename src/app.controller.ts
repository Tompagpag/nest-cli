import { Controller, Get } from '@nestjs/common';
import { CustomProvider } from './app.provider';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // pour pouvoir utiliser le service
  constructor(
    private readonly appService: AppService,
    private readonly customProvider: CustomProvider,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/constante')
  getConstante(): any {
    return this.customProvider.getConstante();
  }
}
