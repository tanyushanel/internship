import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarTestComponent } from './grammar-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [GrammarTestComponent],
  imports: [CommonModule, StepperModule, AngularMaterialCommonModule],
  exports: [GrammarTestComponent],
})
export class GrammarTestModule {}
