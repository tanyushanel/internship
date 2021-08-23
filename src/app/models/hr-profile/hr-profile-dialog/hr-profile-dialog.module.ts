import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { HrProfileDialogComponent } from './hr-profile-dialog.component';

@NgModule({
  declarations: [HrProfileDialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    AngularMaterialCommonModule,
  ],
  exports: [],
})
export class HrProfileDialogModule {}
