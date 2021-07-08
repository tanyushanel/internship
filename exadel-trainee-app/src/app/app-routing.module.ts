import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./models/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'grammar',
    loadChildren: () =>
      import('./models/grammar-test/grammar-test.module').then((m) => m.GrammarTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
