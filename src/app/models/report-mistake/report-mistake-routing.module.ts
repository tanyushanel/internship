import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRole } from '../../constants/data-constants';
import { AuthGuard } from '../../guard/auth.guard';
import { ReportMistakeComponent } from './report-mistake.component';

const routes: Routes = [
  {
    path: '',
    component: ReportMistakeComponent,
    data: {
      accessRoles: [UserRole.Coach],
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMistakeRoutingModule {}
