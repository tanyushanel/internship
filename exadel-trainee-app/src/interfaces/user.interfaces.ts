import { UserRole } from '../constants/data-constants';

export interface UserResponseType {
  id: number;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  token: string;
}
