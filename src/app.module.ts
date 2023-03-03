import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomProvider } from './app.provider';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [
    AppService,
    CustomProvider,
    {
      provide: 'MA_CONSTANTE',
      useValue: '123456',
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { provide: 'MON_SERVICE_MOCK', useValue: { unTruc: () => {} } },
  ],
})
export class AppModule {}
