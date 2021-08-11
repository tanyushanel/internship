import { UserRole } from '../constants/data-constants';

export interface User {
  id: number;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  token?: string;
}

export interface UserResponseType {
  userId: string;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  token?: string;
}

export interface UserToken {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  jti: string;
  roles: string;
  sub: string;
  uid: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface ApiAssignTest {
  assignmentEndDate: string;
  userId: string;
  priority: boolean;
}
