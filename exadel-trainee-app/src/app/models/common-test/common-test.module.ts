import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTestComponent } from './common-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { CommonTestRoutingModule } from './common-test-routing.module';
import { WritingTestModule } from '../writing-test/writing-test.module';
import { SpeakingTestModule } from '../speaking-test/speaking-test.module';
import { ListeningTestModule } from '../listening-test/listening-test.module';
import { GrammarTestModule } from '../grammar-test/grammar-test.module';

@NgModule({
  declarations: [CommonTestComponent],
  imports: [
    CommonModule,
    CommonTestRoutingModule,
    AngularMaterialCommonModule,
    GrammarTestModule,
    ListeningTestModule,
    SpeakingTestModule,
    WritingTestModule,
  ],
  exports: [CommonTestComponent],
})
export class CommonTestModule {}
