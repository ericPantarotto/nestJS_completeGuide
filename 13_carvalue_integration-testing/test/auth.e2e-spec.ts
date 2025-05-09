import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Authentication System (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/signup (POST), handles a signup request', () => {
    const email = 'anyuser@test.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: email, password: 'test1234' })
      .expect(201)
      .then((res) => {
        interface SignupResponse {
          id: string;
          email: string;
        }
        const { id, email }: SignupResponse = res.body as SignupResponse;
        expect(id).toBeDefined();
        expect(email).toBe(email);
      });
  });
});
