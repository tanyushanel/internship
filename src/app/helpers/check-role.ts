import { ActivatedRouteSnapshot } from '@angular/router';

export const isRoleExist = (route: ActivatedRouteSnapshot, role: string): boolean => {
  return route.data.accessRoles.includes(role);
};
