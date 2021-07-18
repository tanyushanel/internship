import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResultsTableComponent } from './user-results-table.component';
import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';

@NgModule({
  declarations: [UserResultsTableComponent],
  imports: [CommonModule, AngularMaterialCommonModule],
  exports: [UserResultsTableComponent],
})
export class UserResultsModule {}
