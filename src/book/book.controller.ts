import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('book')
export class BookController {
  protected readonly books: string[] = [
    'American Psycho',
    "J'irai cracher sur vos tombes",
    'Sa majesté des mouches',
  ];
  @Get()
  list(): string[] {
    return this.books;
  }
  @Get('/:index')
  getBookByIndex(@Param('index') index: string) {
    if (!this.books[index]) {
      throw new NotFoundException(`Book with index ${index} does not exist!`);
    }
    return this.books[index];
  }

  @Post()
  addBook(@Body('title') book: string) {
    this.books.push(book);
    return book;
  }

  @Put('/:index')
  updateBook(@Param('index') index: string, @Body('title') book: string) {
    if (!this.books[index]) {
      throw new NotFoundException(`Book with index ${index} does not exist!`);
    }
    this.books[index] = book;
    return book;
  }

  @Delete('/:index')
  deleteBook(@Param('index') index: string) {
    if (!this.books[index]) {
      throw new NotFoundException(`Book with index ${index} does not exist!`);
    }

    this.books.splice(parseInt(index, 10), 1);

    return 'deleted';
  }
}
