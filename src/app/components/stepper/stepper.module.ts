import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { RouterModule } from '@angular/router';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    RouterModule,
  ],
  exports: [StepperComponent],
})
export class StepperModule {}
