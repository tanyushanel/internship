import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakingTestComponent } from './speaking-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  imports: [CommonModule, AngularMaterialCommonModule],
  declarations: [SpeakingTestComponent],
  exports: [SpeakingTestComponent],
})
export class SpeakingTestModule {}
