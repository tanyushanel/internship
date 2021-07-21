import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningTestRoutingModule } from './listening-test-routing.module';
import { ListeningTestComponent } from './listening-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, ListeningTestRoutingModule, StepperModule],
})
export class ListeningTestModule {}
