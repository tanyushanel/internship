export enum Route {
  users = 'hrProfile',
  home = 'home',
  check = 'coachProfile',
  editor = 'editor',
  report = 'report',
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
  mistakes = 'Mistake Reports',
  manage = 'Manage',
}

export enum SidebarIcon {
  homeicon = 'home',
  usersicon = 'group',
  checkicon = 'fact_check',
  editoricon = 'edit_note',
  manageicon = 'manage_accounts',
  statisticsicon = 'insert_chart_outlined',
  reporticon = 'report',
}

export const BASE_API_URL = 'http://elevel-001-site1.btempurl.com/api';

export const UserTableUrl = `${BASE_API_URL}/User`;
export const LoginApiUrl = `${BASE_API_URL}/User/token`;
export const QuestionApiUrl = `${BASE_API_URL}/Question`;
export const PostAssignTest = `${BASE_API_URL}/Test/assign`;
export const RefreshUserDataUrl = `${BASE_API_URL}/User/info`;
export const TopicApiUrl = `${BASE_API_URL}/Topic`;
export const ListeningApiUrl = `${BASE_API_URL}/Audition`;
export const UploadFileListeningApiUrl = `${BASE_API_URL}/File/Upload`;
export const DownloadFileListeningApiUrl = `${BASE_API_URL}/File/Download`;
export const MistakeReportApiUrl = `${BASE_API_URL}/Report`;
