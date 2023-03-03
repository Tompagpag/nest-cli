import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDto } from './create-note.dto';

// nous utilisons la classe originale CreateNoteDto,
//et la méthode PartialType nous aide à l'étendre,
//mais en rendant toutes ses propriétés facultatives

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
