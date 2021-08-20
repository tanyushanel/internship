import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';

import { MatSelectModule } from '@angular/material/select';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { AdminProfileRouting } from './admin-profile-routing';
import { AdminProfileComponent } from './admin-profile.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { TableComponent } from './admin-table/table.component';

@NgModule({
  declarations: [AdminProfileComponent, AdminDialogComponent, TableComponent],
  imports: [
    AngularMaterialCommonModule,
    CommonModule,
    AdminProfileRouting,
    MatTableModule,
    ScrollingModule,
    MatTabsModule,
    MatSelectModule,
  ],
  providers: [DatePipe, ScrollDispatcher],
})
export class AdminProfileModule {}
