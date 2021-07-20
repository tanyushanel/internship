import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WritingTestRoutingModule } from './writing-test-routing.module';
import { WritingTestComponent } from './writing-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [WritingTestComponent],
  imports: [
    CommonModule,
    WritingTestRoutingModule,
    AngularMaterialCommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WritingTestComponent],
})
export class WritingTestModule {}
