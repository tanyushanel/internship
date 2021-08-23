import { UserRole } from '../constants/data-constants';

export interface User {
  id: string;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  token?: string;
}
export interface GetHrUser {
  avatar: string;
  creationDate: string;
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
  roles: UserRole[];
}

export interface UserResponseType {
  avatar?: string;
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
