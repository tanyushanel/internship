import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AngularMaterialCommonModule } from '../../../angular-material-common.module';
import { AddListeningDialogComponent } from './add-listening-dialog.component';

@NgModule({
  declarations: [AddListeningDialogComponent],
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    AngularMaterialCommonModule,
    CommonModule,
  ],
  exports: [AddListeningDialogComponent],
})
export class AddListeningDialogModule {}
