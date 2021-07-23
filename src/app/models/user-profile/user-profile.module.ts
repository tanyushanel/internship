import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserResultsModule } from '../../components/user-results-table/user-results.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { TimerComponent } from '../../components/timer/timer.component';
import { TimePipe } from '../../components/timer/time.pipe';

@NgModule({
  declarations: [UserProfileComponent, TimerComponent, TimePipe],
  imports: [CommonModule, UserProfileRoutingModule, UserResultsModule, AngularMaterialCommonModule],
})
export class UserProfileModule {}
