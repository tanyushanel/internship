import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTestComponent } from './common-test.component';
import { UserRole } from '../../../constants/data-constants';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CommonTestComponent,
    data: {
      accessRoles: [
        UserRole.User,
        UserRole.Coach,
        UserRole.Administrator,
        UserRole.HumanResourceManager,
      ],
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonTestRoutingModule {}
