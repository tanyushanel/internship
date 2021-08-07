import { Route, SidebarMenu } from './route-constant';
import { UserRole } from './data-constants';

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
  [UserRole.User]: {
    route: [Route.home],
    menuItem: [SidebarMenu.home],
  },

  [UserRole.HumanResourceManager]: {
    route: [Route.home, Route.users],
    menuItem: [SidebarMenu.home, SidebarMenu.users],
  },
  [UserRole.Coach]: {
    route: [Route.home, Route.check, Route.editor],
    menuItem: [SidebarMenu.home, SidebarMenu.check, SidebarMenu.editor],
  },
  [UserRole.Administrator]: {
    route: [Route.home, Route.manage, Route.statistics],
    menuItem: [SidebarMenu.home, SidebarMenu.manage, SidebarMenu.statistics],
  },
};

export const usersMockDataResponse = [
  {
    id: 0,
    message: null,
    isAuthenticated: true,
    firstName: 'Admin',
    lastName: 'Adminov',
    email: 'eleveladministrator@gmail.com  ',
    roles: [UserRole.Administrator],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbkFkbWlub3YiLCJqdGkiOiJhOWUyNzA2Yi04NGEwLTQxNDMtOWQwZC0wODE4MGMzNDA2NzEiLCJlbWFpbCI6IkVsZXZlbEFkbWluaXN0cmF0b3JAZ21haWwuY29tIiwidWlkIjoiYTg2YTEyY2ItMmFmZS00MGE4LTA5ODItMDhkOTQyNDdlZmE1Iiwicm9sZXMiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNjI2MTc0ODg5LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.v5f7ZkoLC6lT5urcwy4XtY5NTR5ZpNfPHZeXwnwFzz4  ',
  },
  {
    id: 1,
    message: null,
    isAuthenticated: true,
    firstName: 'User',
    lastName: 'Userof',
    email: 'eleveluser@gmail.com',
    roles: [UserRole.User],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbkFkbWlub3YiLCJqdGkiOiJhOWUyNzA2Yi04NGEwLTQxNDMtOWQwZC0wODE4MGMzNDA2NzEiLCJlbWFpbCI6IkVsZXZlbEFkbWluaXN0cmF0b3JAZ21haWwuY29tIiwidWlkIjoiYTg2YTEyY2ItMmFmZS00MGE4LTA5ODItMDhkOTQyNDdlZmE1Iiwicm9sZXMiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNjI2MTc0ODg5LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.v5f7ZkoLC6lT5urcwy4XtY5NTR5ZpNfPHZeXwnwFzz4  ',
  },
  {
    id: 2,
    message: null,
    isAuthenticated: true,
    firstName: 'HR',
    lastName: 'HRof',
    email: 'elevelhumanresourcemanager@gmail.com ',
    roles: [UserRole.HumanResourceManager],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbkFkbWlub3YiLCJqdGkiOiJhOWUyNzA2Yi04NGEwLTQxNDMtOWQwZC0wODE4MGMzNDA2NzEiLCJlbWFpbCI6IkVsZXZlbEFkbWluaXN0cmF0b3JAZ21haWwuY29tIiwidWlkIjoiYTg2YTEyY2ItMmFmZS00MGE4LTA5ODItMDhkOTQyNDdlZmE1Iiwicm9sZXMiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNjI2MTc0ODg5LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.v5f7ZkoLC6lT5urcwy4XtY5NTR5ZpNfPHZeXwnwFzz4  ',
  },
  {
    id: 3,
    message: null,
    isAuthenticated: true,
    firstName: 'Coach',
    lastName: 'Coachov',
    email: 'elevelcoach@gmail.com',
    roles: [UserRole.Coach],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbkFkbWlub3YiLCJqdGkiOiJhOWUyNzA2Yi04NGEwLTQxNDMtOWQwZC0wODE4MGMzNDA2NzEiLCJlbWFpbCI6IkVsZXZlbEFkbWluaXN0cmF0b3JAZ21haWwuY29tIiwidWlkIjoiYTg2YTEyY2ItMmFmZS00MGE4LTA5ODItMDhkOTQyNDdlZmE1Iiwicm9sZXMiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNjI2MTc0ODg5LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.v5f7ZkoLC6lT5urcwy4XtY5NTR5ZpNfPHZeXwnwFzz4  ',
  },
];

export const user = {
  id: 1,
  firstName: 'Сальвадор',
  lastName: 'Бананович',
  email: 'salsa@mail.com',
  role: UserRole.Coach,
  userPhoto: '',
};
export const emptyQuestion = {
  level: 1,
  nameQuestion: '',
  answers: [
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
  ],
};
