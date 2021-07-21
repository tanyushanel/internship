import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './components/mock-component/statistics/statistics.component';
import { EditorComponent } from './components/mock-component/editor/editor.component';
import { Route } from '../constants/route-constant';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./models/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Route.home,
    loadChildren: () =>
      import('./models/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {
    path: Route.test,
    loadChildren: () =>
      import('./models/common-test/common-test.module').then((m) => m.CommonTestModule),
  },
  {
    path: Route.users,
    loadChildren: () =>
      import('./models/hr-profile/hr-profile.module').then((m) => m.HrProfileModule),
  },
  {
    path: Route.check,
    loadChildren: () =>
      import('./models/coach-profile/coach-profile.module').then((m) => m.CoachProfileModule),
  },
  {
    path: Route.manage,
    loadChildren: () =>
      import('./models/admin-profile/admin-profile.module').then((m) => m.AdminProfileModule),
  },
  {
    path: Route.result,
    loadChildren: () => import('./models/result/result.module').then((m) => m.ResultModule),
  },
  {
    path: Route.statistics,
    component: StatisticsComponent,
  },
  {
    path: Route.editor,
    component: EditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
