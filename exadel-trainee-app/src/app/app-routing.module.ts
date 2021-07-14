import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/mock-component/home/home.component';
import { UsersComponent } from './components/mock-component/users/users.component';
import { ManageComponent } from './components/mock-component/manage/manage.component';
import { CheckComponent } from './components/mock-component/check/check.component';
import { StatisticsComponent } from './components/mock-component/statistics/statistics.component';
import { EditorComponent } from './components/mock-component/editor/editor.component';
import { Route } from '../constants/route-constant';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./models/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./models/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {
    path: 'speaking',
    loadChildren: () =>
      import('./models/speaking-test/speaking-test.module').then((m) => m.SpeakingTestModule),
  },
  {
    path: 'grammar',
    loadChildren: () =>
      import('./models/grammar-test/grammar-test.module').then((m) => m.GrammarTestModule),
  },
  {
    path: 'hrProfile',
    loadChildren: () =>
      import('./models/hr-profile/hr-profile.module').then((m) => m.HrProfileModule),
  },
  {
    path: 'coach-profile',
    loadChildren: () =>
      import('./models/coach-profile/coach-profile.module').then((m) => m.CoachProfileModule),
  },
  {
    path: 'writing',
    loadChildren: () =>
      import('./models/writing-test/writing-test.module').then((m) => m.WritingTestModule),
  },
  {
    path: 'adminProfile',
    loadChildren: () =>
      import('./models/admin-profile/admin-profile.module').then((m) => m.AdminProfileModule),
  },
  {
    path: 'listening',
    loadChildren: () =>
      import('./models/listening-test/listening-test.module').then((m) => m.ListeningTestModule),
  },
  // mock component for check business logic
  {
    path: Route.home,
    component: HomeComponent,
  },
  {
    path: Route.users,
    component: UsersComponent,
  },
  {
    path: Route.manage,
    component: ManageComponent,
  },
  {
    path: Route.check,
    component: CheckComponent,
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
