import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EditListeningDialogComponent } from './edit-listening-dialog.component';
import { AngularMaterialCommonModule } from '../../../angular-material-common.module';

@NgModule({
  declarations: [EditListeningDialogComponent],
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    AngularMaterialCommonModule,
    CommonModule,
  ],
  exports: [EditListeningDialogComponent],
})
export class EditListeningDialogModule {}
