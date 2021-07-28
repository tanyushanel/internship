import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningTestComponent } from './listening-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';
import { ProceedButtonsComponent } from '../common-test/proceed-buttons/proceed-buttons.component';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, StepperModule],
  exports: [ListeningTestComponent],
})
export class ListeningTestModule {}
