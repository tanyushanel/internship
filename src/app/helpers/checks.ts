import { ActivatedRouteSnapshot } from '@angular/router';
import { languageLevel, Level } from '../constants/data-constants';

export const isRoleExist = (route: ActivatedRouteSnapshot, role: string): boolean => {
  return route.data.accessRoles.includes(role);
};
export const englishLevelNumber = (event: Level): number => {
  return Number(Object.keys(languageLevel).find((key) => languageLevel[key] === event));
};
