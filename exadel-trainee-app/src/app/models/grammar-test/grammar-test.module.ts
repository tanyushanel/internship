import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarTestRoutingModule } from './grammar-test-routing.module';
import { GrammarTestComponent } from './grammar-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';

@NgModule({
  declarations: [GrammarTestComponent],
  imports: [CommonModule, GrammarTestRoutingModule, StepperModule],
})
export class GrammarTestModule {}
