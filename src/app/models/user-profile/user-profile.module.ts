import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserResultsModule } from '../../components/user-results-table/user-results.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutingModule, UserResultsModule, AngularMaterialCommonModule],
})
export class UserProfileModule {}
