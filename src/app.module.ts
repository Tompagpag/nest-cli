import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CustomProvider } from './app.provider';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r9hjvfn.mongodb.net/?retryWrites=true&w=majority`,
    ),
    BookModule,
    NotesModule,
  ],
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
