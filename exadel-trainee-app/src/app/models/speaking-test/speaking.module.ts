import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakingComponent } from './speaking.component';
import { SpeakingRoutingModule } from './speaking-routing.module';

@NgModule({
  declarations: [SpeakingComponent],
  imports: [SpeakingRoutingModule, CommonModule],
})
export class SpeakingModule {}
