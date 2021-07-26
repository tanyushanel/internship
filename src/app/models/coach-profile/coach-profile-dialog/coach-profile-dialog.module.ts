import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoachProfileDialogComponent } from './coach-profile-dialog.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';

@NgModule({
  declarations: [CoachProfileDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    AngularMaterialCommonModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class CoachProfileDialog {}
