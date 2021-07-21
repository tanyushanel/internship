import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrProfileComponent } from './hr-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HrProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrProfileRoutingModule {}
