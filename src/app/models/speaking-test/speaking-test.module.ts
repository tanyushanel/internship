import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakingTestComponent } from './speaking-test.component';
import { SpeakingTestRoutingModule } from './speaking-test-routing.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  imports: [SpeakingTestRoutingModule, CommonModule, AngularMaterialCommonModule],
  declarations: [SpeakingTestComponent],
})
export class SpeakingTestModule {}
