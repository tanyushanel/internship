import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';
import { UserRole } from '../../../constants/data-constants';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoachProfileEditorComponent,
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
export class CoachProfileEditorRoutingModule {}
