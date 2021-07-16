import { UserRole } from '../../constants/data-constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  userPhoto?: string;
}
