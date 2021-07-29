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
  statistics = 'Statistics',
}

export const BASE_API_URL = 'http://elevel-001-site1.btempurl.com';

export const LoginApiUrl = 'http://elevel-001-site1.btempurl.com/api/User/token';
export const RefreshUserDataUrl = 'http://elevel-001-site1.btempurl.com/api/User/info';
