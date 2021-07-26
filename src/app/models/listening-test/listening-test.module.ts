import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningTestComponent } from './listening-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, StepperModule],
  exports: [ListeningTestComponent],
})
export class ListeningTestModule {}
