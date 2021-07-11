import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/mock-component/home/home.component';
import { UsersComponent } from './components/mock-component/users/users.component';
import { ManageComponent } from './components/mock-component/manage/manage.component';
import { CheckComponent } from './components/mock-component/check/check.component';
import { StatisticsComponent } from './components/mock-component/statistics/statistics.component';
import { EditorComponent } from './components/mock-component/editor/editor.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./models/login/login.module').then((m) => m.LoginModule),
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
    path: 'coachProfile',
    loadChildren: () =>
      import('./models/coachProfile/coachProfile.module').then((m) => m.CoachProfileModule),
  },
  {
    path: 'writing',
    loadChildren: () =>
      import('./models/writing-test/writing-test.module').then((m) => m.WritingTestModule),
  },
  {
    path: 'listening',
    loadChildren: () =>
      import('./models/listening/listening.module').then((m) => m.ListeningModule),
  },
  // mock component for check business logic
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
  {
    path: 'check',
    component: CheckComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
