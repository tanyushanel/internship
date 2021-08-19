import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserResultsModule } from '../../components/user-results-table/user-results.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutingModule, UserResultsModule, AngularMaterialCommonModule],
})
export class UserProfileModule {}
