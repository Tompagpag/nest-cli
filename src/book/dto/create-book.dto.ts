import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDTO {
  readonly id: number;
  @IsString()
  readonly title: string;
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly author: string;
}
