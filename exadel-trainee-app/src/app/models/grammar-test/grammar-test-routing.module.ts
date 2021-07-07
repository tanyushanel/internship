import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GrammarTestComponent} from './grammar-test.component';

const routes: Routes = [
  {
    path: '',
    component: GrammarTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrammarTestRoutingModule { }
