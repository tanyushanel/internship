import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTestComponent } from './common-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { WritingTestModule } from '../writing-test/writing-test.module';
import { SpeakingTestModule } from '../speaking-test/speaking-test.module';
import { GrammarTestModule } from '../grammar-test/grammar-test.module';
import { ProceedButtonsComponent } from './proceed-buttons/proceed-buttons.component';
import { ListeningTestModule } from '../listening-test/listening-test.module';
import { CommonTestRoutingModule } from './common-test-routing.module';
import { ReportMistakeDialogComponent } from '../../components/report-mistake-dialog/report-mistake-dialog.component';

@NgModule({
  declarations: [CommonTestComponent, ProceedButtonsComponent, ReportMistakeDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CommonTestRoutingModule,
    GrammarTestModule,
    ListeningTestModule,
    SpeakingTestModule,
    WritingTestModule,
  ],
  exports: [ProceedButtonsComponent],
})
export class CommonTestModule {}
