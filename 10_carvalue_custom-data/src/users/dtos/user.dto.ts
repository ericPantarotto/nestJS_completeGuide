import { Expose } from 'class-transformer';
import { UserInterface } from 'src/interfaces/user.interface';

export class UserDto implements UserInterface {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
