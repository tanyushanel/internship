import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserResultsTableComponent } from './user-results-table/user-results-table.component';

@NgModule({
  declarations: [UserProfileComponent, UserResultsTableComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    AngularMaterialCommonModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
})
export class UserProfileModule {}
