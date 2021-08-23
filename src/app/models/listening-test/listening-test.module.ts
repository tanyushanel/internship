import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { ListeningTestComponent } from './listening-test.component';
import { StepperModule } from '../../components/stepper/stepper.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, StepperModule, AngularMaterialCommonModule, NgxAudioPlayerModule],
  exports: [ListeningTestComponent],
})
export class ListeningTestModule {}
