import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserResultsTableComponent } from './user-results-table/user-results-table.component';
import { NotificationComponent } from '../../components/sidebar/notification/notification.component';

@NgModule({
  declarations: [UserProfileComponent, UserResultsTableComponent, NotificationComponent],
  imports: [CommonModule, UserProfileRoutingModule, AngularMaterialCommonModule],
})
export class UserProfileModule {}
