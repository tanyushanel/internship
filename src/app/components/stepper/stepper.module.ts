import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, AngularMaterialCommonModule],
  exports: [StepperComponent],
})
export class StepperModule {}
