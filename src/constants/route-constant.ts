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
  homeicon = '../../assets/icons.svg#icon-home',
  usersicon = '../../assets/icons.svg#icon-group',
  checkicon = '../../assets/icons.svg#icon-check-list-outline',
  editoricon = '../../assets/icons.svg#icon-editor',
  manageicon = '../../assets/icons.svg#icon-manage',
  statisticsicon = '../../assets/icons.svg#icon-statistic',
}

export const LoginApiUrl = 'http://elevel-001-site1.btempurl.com/api/User/token';
export const RefreshUserDataUrl = 'http://elevel-001-site1.btempurl.com/api/User/info';
