import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersUtilsMock } from 'src/mocks/users-utils.mock';
import { CoachProfileComponent } from './coach-profile.component';
import { CoachProfileRoutingModule } from './coach-profile-routing.module';

@NgModule({
  declarations: [CoachProfileComponent],
  imports: [CommonModule, UsersUtilsMock, CoachProfileRoutingModule],
})
export class CoachProfileModule {}
