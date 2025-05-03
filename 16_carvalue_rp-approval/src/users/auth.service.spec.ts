import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) =>
        Promise.resolve(users.filter((user) => user.email === email)),
      create: (email: string, password: string) => {
        const user = {
          id: Math.floor(Math.random() * 10000),
          email,
          password,
        } as User;

        users.push(user);

        return Promise.resolve(user);
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of the auth service', () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('createnewuser@test.com', 'test1234');

    expect(user.password).not.toEqual('testOK');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    await service.signup('anyemail@test.com', 'test1234');
    await expect(
      service.signup('anyemail@test.com', 'test1234'),
    ).rejects.toThrow(BadRequestException);
  });

  it('throws an error if signin is called with an unused email', async () => {
    await expect(
      service.signin('anyemail@test.com', 'testFailed'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws if an invalid password is provided', async () => {
    await service.signup('anyemail@test.com', 'test1234');

    await expect(
      service.signin('anyemail@test.com', 'incorrectPassword'),
    ).rejects.toThrow(BadRequestException);
  });

  it('returns a user if correct password is provided', async () => {
    await service.signup('anyemail@test.com', 'test1234');

    const user = await service.signin('anyemail@test.com', 'test1234');
    expect(user.email).toEqual('anyemail@test.com');
  });
});
