import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    //NOTE: Create a fake copy of the users service
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
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
    fakeUsersService.find = () =>
      Promise.resolve([
        { id: 1, email: 'userfound@test.com', password: 'testFailed' } as User,
      ]);

    await expect(
      service.signup('userfound@test.com', 'testFailed'),
    ).rejects.toThrow(BadRequestException);
  });

  it('throws an error if signin is called with an unused email', async () => {
    await expect(
      service.signin('anyemail@test.com', 'testFailed'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'oneuser@test.com', password: 'testFailed' } as User,
      ]);

    await expect(
      service.signin('anyemail@test.com', 'differentPassword'),
    ).rejects.toThrow(BadRequestException);
  });

  it('returns a user if correct password is provided', async () => {
    // NOTE: get the hashed password from the console.log: 1df7739c207e0a9d.b0cd0b086fdc1087dce5e2fee34aa585e7eb755b70b327ba5ef42725edd51ba0
    // const user = await service.signup('anyemail@test.com', 'test1234');
    // console.log(user);

    fakeUsersService.find = () =>
      Promise.resolve([
        {
          email: 'anyemail@test.com',
          password:
            '1df7739c207e0a9d.b0cd0b086fdc1087dce5e2fee34aa585e7eb755b70b327ba5ef42725edd51ba0',
        } as User,
      ]);

    const user = await service.signin('anyemail@test.com', 'test1234');
    expect(user.email).toEqual('anyemail@test.com');
  });
});
