import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningTestComponent } from './listening-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';
import { ProceedButtonsComponent } from '../common-test/proceed-buttons/proceed-buttons.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, StepperModule, AngularMaterialCommonModule],
  exports: [ListeningTestComponent],
})
export class ListeningTestModule {}
