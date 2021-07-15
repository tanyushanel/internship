import { Role } from '../constants/data-constants';

export interface UserResponseType {
  id: number;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
  token: string;
}
