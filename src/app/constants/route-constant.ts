export enum Route {
  users = 'hrProfile',
  home = 'home',
  check = 'coachProfile',
  editor = 'editor',
  manage = 'adminProfile',
  statistics = 'statistics',
  result = 'result',
  test = 'test',
  assigned = 'testAssigned',
  error = 'error',
  login = '/',
}

export enum SidebarMenu {
  home = 'Home',
  users = 'Users',
  check = 'Test Checking',
  editor = 'Test Editor',
  manage = 'Manage',
}

export enum SidebarIcon {
  homeicon = 'home',
  usersicon = 'group',
  checkicon = 'fact_check',
  editoricon = 'edit_note',
  manageicon = 'manage_accounts',
  statisticsicon = 'insert_chart_outlined',
}

export const BASE_API_URL = 'http://elevel-001-site1.btempurl.com/api';

export const UserTableUrl = `${BASE_API_URL}/User`;
export const LoginApiUrl = `${BASE_API_URL}/User/token`;
export const QuestionApiUrl = `${BASE_API_URL}/Question`;
export const PostAssignTest = `${BASE_API_URL}/Test/assign`;
export const RefreshUserDataUrl = `${BASE_API_URL}/User/info`;
export const TopicApiUrl = `${BASE_API_URL}/Topic`;
