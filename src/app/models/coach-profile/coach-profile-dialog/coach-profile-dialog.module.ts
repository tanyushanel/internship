import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  exports: [],
})
export class CoachProfileDialog {}
