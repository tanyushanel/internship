export enum Route {
  users = 'hrProfile',
  home = 'home',
  check = 'coachProfile',
  editor = 'editor',
  manage = 'adminProfile',
  statistics = 'statistics',
  result = 'result',
  test = 'test',
  error = 'error',
  login = '/',
}

export enum SidebarMenu {
  home = 'Home',
  users = 'Users',
  check = 'Check',
  editor = 'Editor',
  manage = 'Manage',
}

export const BASE_API_URL = 'http://elevel-001-site1.btempurl.com';

export const UserTableUrl = `${BASE_API_URL}/api/User`;
export const LoginApiUrl = `${BASE_API_URL}/api/User/token`;
export const RefreshUserDataUrl = `${BASE_API_URL}/api/User/info`;
export const PostAssignTest = `${BASE_API_URL}/api/Test/assign`;
