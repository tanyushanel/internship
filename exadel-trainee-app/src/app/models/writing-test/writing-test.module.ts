import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WritingTestComponent } from './writing-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [WritingTestComponent],
  imports: [CommonModule, AngularMaterialCommonModule],
  exports: [WritingTestComponent],
})
export class WritingTestModule {}
