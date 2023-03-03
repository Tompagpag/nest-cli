import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesService } from './notes.service';
import { NotesSchema } from './notes.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Notes', schema: NotesSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
