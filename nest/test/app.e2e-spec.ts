import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('/contact', () => {
    it('/contact (POST)', () => {
      return request(app.getHttpServer())
        .post('/contact')
        .send({ name: 'hoya', email: ['abc@example.com'] })
        .expect(201)
        .expect({});
    });

    it('/contact (POST)', () => {
      return request(app.getHttpServer())
        .post('/contact')
        .send({ name: 123, email: ['def@example.com'] })
        .expect(400);
    });

    it('/contact (GET)', () => {
      return request(app.getHttpServer())
        .get('/contact')
        .expect(200);
    });

    it('/contact (PUT)', () => {
      return request(app.getHttpServer())
        .put('/contact')
        .send([
          { name: 'hoya', email: ['abc@example.com'] },
          { name: 'park', age: 30, email: ['def@example.com'] },
        ])
        .expect(200);
    });
  });

  describe('/contact/:id', () => {
    it('/contact/1 (GET)', () => {
      return request(app.getHttpServer())
        .get('/contact/1')
        .expect(200);
    });

    it('/contact/9 (GET)', () => {
      return request(app.getHttpServer())
        .get('/contact/9')
        .expect(404);
    });

    it('/contact/1 (PATCH)', () => {
      return request(app.getHttpServer())
        .patch('/contact/1')
        .send({ name: 'kim' })
        .expect(200);
    });

    it('/contact/9 (PATCH)', () => {
      return request(app.getHttpServer())
        .patch('/contact/9')
        .send({ name: 'lee' })
        .expect(404);
    });

    it('/contact/1 (DELETE)', () => {
      return request(app.getHttpServer())
        .delete('/contact/1')
        .expect(200);
    });
  });

  describe('/contact/search?', () => {
    it('/contact/search?name=park (GET)', () => {
      return request(app.getHttpServer())
        .get('/contact/search?name=park')
        .expect(200);
    });

    it('/contact/search?name=hoya (GET)', () => {
      return request(app.getHttpServer())
        .get('/contact/search?name=hoya')
        .expect(404);
    });
  });
});
