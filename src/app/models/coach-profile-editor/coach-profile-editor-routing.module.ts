import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';

const routes: Routes = [
  {
    path: '',
    component: CoachProfileEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachProfileEditorRoutingModule {}
