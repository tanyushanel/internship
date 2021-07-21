import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakingTestComponent } from './speaking-test.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakingTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakingTestRoutingModule {}
