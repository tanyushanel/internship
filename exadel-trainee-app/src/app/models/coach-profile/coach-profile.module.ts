import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { CoachProfileRoutingModule } from './coach-profile-routing.module';
import { CoachProfileComponent } from './coach-profile.component';

@NgModule({
  declarations: [CoachProfileComponent],
  imports: [
    CommonModule,
    CoachProfileRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
  ],
})
export class CoachProfileModule {}
