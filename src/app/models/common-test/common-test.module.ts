import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportMistakeDialogComponent } from '../../components/report-mistake-dialog/report-mistake-dialog.component';
import { ReportSubmitModalComponent } from '../../components/report-submit-modal/report-submit-modal.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { GrammarTestModule } from '../grammar-test/grammar-test.module';
import { ListeningTestModule } from '../listening-test/listening-test.module';
import { SpeakingTestModule } from '../speaking-test/speaking-test.module';
import { WritingTestModule } from '../writing-test/writing-test.module';
import { CommonTestRoutingModule } from './common-test-routing.module';
import { CommonTestComponent } from './common-test.component';

@NgModule({
  declarations: [CommonTestComponent, ReportMistakeDialogComponent, ReportSubmitModalComponent],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CommonTestRoutingModule,
    GrammarTestModule,
    ListeningTestModule,
    SpeakingTestModule,
    WritingTestModule,
  ],
  exports: [],
})
export class CommonTestModule {}
