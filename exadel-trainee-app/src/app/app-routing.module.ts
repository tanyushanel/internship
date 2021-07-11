import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
