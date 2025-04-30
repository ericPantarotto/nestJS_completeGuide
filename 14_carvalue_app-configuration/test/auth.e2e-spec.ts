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

  it('/signup (POST), handles a signup request', async () => {
    // console.log(process.env.NODE_ENV);

    const email = 'anyuser@test.com';
    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: email, password: 'test1234' })
      .expect(201);
    interface SignupResponse {
      id: string;
      email: string;
    }
    const { id, email: email_1 }: SignupResponse = res.body as SignupResponse;
    expect(id).toBeDefined();
    expect(email_1).toBe(email_1);
  });

  it('/whoami (GET), signup a new user and then get the currently logged in user', async () => {
    const email = 'user@test.com';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: email, password: 'test1234' })
      .expect(201);

    const cookie = res.get('Set-Cookie');

    if (!cookie) {
      throw new Error('Cookie not found in the response');
    }

    const response = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);

    // Define the WhoAmIResponse interface
    interface WhoAmIResponse {
      email: string;
    }

    const responseBody: WhoAmIResponse = response.body as WhoAmIResponse;
    expect(responseBody.email).toBe(email);
    // expect(responseBody.email).toBe('emailerror@test.com'); //ERROR: simulate a test failure
  });
});
