import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { AdminProfileRouting } from './admin-profile-routing';
import { AdminProfileComponent } from './admin-profile.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { TableComponent } from './admin-table/table.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [AdminProfileComponent, AdminDialogComponent, TableComponent],
  imports: [AdminProfileRouting, AngularMaterialCommonModule],
  providers: [DatePipe, ScrollDispatcher],
})
export class AdminProfileModule {}
