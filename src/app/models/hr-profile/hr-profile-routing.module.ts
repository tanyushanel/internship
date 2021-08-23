import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrProfileComponent } from './hr-profile.component';
import { UserRole } from '../../constants/data-constants';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HrProfileComponent,
    data: {
      accessRoles: [UserRole.HumanResourceManager],
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrProfileRoutingModule {}
