import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { UserProfileModule } from '../user-profile/user-profile.module';

@NgModule({
  declarations: [UserResultsDialogComponent],
  imports: [CommonModule, AngularMaterialCommonModule, UserProfileModule],
  exports: [UserResultsDialogComponent],
})
export class CommonDialogModule {}
