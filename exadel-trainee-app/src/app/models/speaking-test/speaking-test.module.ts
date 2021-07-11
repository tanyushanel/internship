import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakingTestComponent } from './speaking-test.component';
import { SpeakingTestRoutingModule } from './speaking-test-routing.module';

@NgModule({
  declarations: [SpeakingTestComponent],
  imports: [SpeakingTestRoutingModule, CommonModule],
})
export class SpeakingTestModule {}
