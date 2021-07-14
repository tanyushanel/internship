export interface UserResponseType {
  id: number;
  message: null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  token: string;
}
