import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('/book [GET]', () => {
  //   return request(app.getHttpServer())
  //     .get('/book')
  //     .expect(200)
  //     .expect(["Apprendre NestJS, c'est facile"]);
  // });
});
