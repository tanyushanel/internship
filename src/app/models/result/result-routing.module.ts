import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result.component';
import { AuthGuard } from '../../guard/auth.guard';
import { UserRole } from '../../constants/data-constants';

const routes: Routes = [
  {
    path: '',
    component: ResultComponent,

    data: {
      accessRoles: [
        UserRole.User,
        UserRole.Administrator,
        UserRole.Coach,
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
export class ResultRoutingModule {}
