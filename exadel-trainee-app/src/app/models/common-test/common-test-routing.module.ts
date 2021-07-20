import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammarTestComponent } from '../grammar-test/grammar-test.component';
import { ListeningTestComponent } from '../listening-test/listening-test.component';
import { CommonTestComponent } from './common-test.component';

const routes: Routes = [
  {
    path: '',
    component: CommonTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonTestRoutingModule {}
