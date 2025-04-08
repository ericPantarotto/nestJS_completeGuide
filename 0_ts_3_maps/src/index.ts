import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');

const user = new User()
customMap.addUserMarker(user);