import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ListeningAddingEditingDialogComponent } from './listening-adding-editing-dialog.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { ChooseLevelModule } from '../../../components/choose-level/choose-level.module';

@NgModule({
  declarations: [ListeningAddingEditingDialogComponent],
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    AngularMaterialCommonModule,
    CommonModule,
    ChooseLevelModule,
  ],
  exports: [ListeningAddingEditingDialogComponent],
})
export class ListeningAddingEditingDialogModule {}
