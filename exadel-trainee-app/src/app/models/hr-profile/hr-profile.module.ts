/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HrProfileComponent } from './hr-profile.component';
import { CommonDialogModule } from '../dialog-module/common-dialog.module';
import { HrProfileRoutingModule } from './hr-profile-routing.module';

@NgModule({
  declarations: [HrProfileComponent],
  imports: [
    CommonModule,
    HrProfileRoutingModule,
    CommonDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class HrProfileModule {}
