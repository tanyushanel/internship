import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimePipe } from '../../components/timer/time.pipe';
import { TestTimerComponent } from '../../components/timer/timer.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { GrammarTestModule } from '../grammar-test/grammar-test.module';
import { ListeningTestModule } from '../listening-test/listening-test.module';
import { SpeakingTestModule } from '../speaking-test/speaking-test.module';
import { WritingTestModule } from '../writing-test/writing-test.module';
import { CommonTestRoutingModule } from './common-test-routing.module';
import { CommonTestComponent } from './common-test.component';
import { ProceedButtonsComponent } from './proceed-buttons/proceed-buttons.component';

@NgModule({
  declarations: [CommonTestComponent, ProceedButtonsComponent, TestTimerComponent, TimePipe],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CommonTestRoutingModule,
    GrammarTestModule,
    ListeningTestModule,
    SpeakingTestModule,
    WritingTestModule,
  ],
  exports: [ProceedButtonsComponent, TestTimerComponent, TimePipe],
})
export class CommonTestModule {}
