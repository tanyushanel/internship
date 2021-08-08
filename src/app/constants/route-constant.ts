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
  check = 'Test Checking',
  editor = 'Test Editor',
  manage = 'Manage',
  statistics = 'Statistics',
}

export const BASE_API_URL = 'http://elevel-001-site1.btempurl.com/api';
export const LoginApiUrl = `${BASE_API_URL}/User/token`;
export const QuestionApiUrl = `${BASE_API_URL}/Question`;
export const PostAssignTest = `${BASE_API_URL}/Test/assign`;
export const RefreshUserDataUrl = `${BASE_API_URL}/User/info`;
