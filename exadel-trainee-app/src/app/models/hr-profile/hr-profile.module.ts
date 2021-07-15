import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HrProfileRoutingModule } from './hr-profile-routing.module';
import { HrProfileComponent } from './hr-profile.component';

@NgModule({
  declarations: [HrProfileComponent],
  imports: [
    CommonModule,
    HrProfileRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class HrProfileModule {}
