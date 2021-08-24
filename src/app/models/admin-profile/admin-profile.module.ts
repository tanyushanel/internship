import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';

import { TableVirtualScrollModule } from 'ng-cdk-table-virtual-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AdminProfileRouting } from './admin-profile-routing';
import { AdminProfileComponent } from './admin-profile.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { TableComponent } from './admin-table/table.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [AdminProfileComponent, AdminDialogComponent, TableComponent],
  imports: [
    CommonModule,
    AdminProfileRouting,
    MatTableModule,
    MatExpansionModule,
    TableVirtualScrollModule,
    ScrollingModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    AngularMaterialCommonModule,
  ],
  providers: [DatePipe, ScrollDispatcher],
})
export class AdminProfileModule {}
