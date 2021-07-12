import { Role, Route, SidebarMenu, UserViewValue } from './route-constant';

export interface UsersPermission {
  value: string;
  viewValue: string;
}
export interface UserRoutType {
  route: string[];
  menuItem: string[];
}
export interface UserRoutesType {
  [key: string]: UserRoutType;
}

export const usersRoute: UserRoutesType = {
  user: {
    route: [Route.home],
    menuItem: [SidebarMenu.home],
  },

  hr: {
    route: [Route.home, Route.users],
    menuItem: [SidebarMenu.home, SidebarMenu.users],
  },
  couch: {
    route: [Route.home, Route.check, Route.editor],
    menuItem: [SidebarMenu.home, SidebarMenu.check, SidebarMenu.editor],
  },
  admin: {
    route: [Route.home, Route.manage, Route.statistics],
    menuItem: [SidebarMenu.home, SidebarMenu.manage, SidebarMenu.statistics],
  },
};

export const userPermission: UsersPermission[] = [
  {
    value: Role.user,
    viewValue: UserViewValue.user,
  },

  {
    value: Role.hr,
    viewValue: UserViewValue.hr,
  },
  {
    value: Role.couch,
    viewValue: UserViewValue.couch,
  },
  {
    value: Role.admin,
    viewValue: UserViewValue.admin,
  },
];
