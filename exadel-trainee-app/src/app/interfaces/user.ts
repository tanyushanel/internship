import { Role } from '../../constants/route-constant';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  userPhoto?: string;
}
