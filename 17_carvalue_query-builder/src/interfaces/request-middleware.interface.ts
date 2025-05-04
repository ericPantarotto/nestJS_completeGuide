import { User } from 'src/users/user.entity';
import { SessionInterface } from './session.interface';

export interface RequestWithSession extends Request {
  session?: SessionInterface;
  currentUser: User | null;
}
