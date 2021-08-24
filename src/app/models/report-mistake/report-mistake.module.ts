import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { ChooseLevelModule } from '../../components/choose-level/choose-level.module';
import { ReportMistakeComponent } from './report-mistake.component';
import { ReportMistakeTableComponent } from './report-mistake-table/report-mistake-table.component';
import { ReportMistakeRoutingModule } from './report-mistake-routing.module';

@NgModule({
  declarations: [ReportMistakeComponent, ReportMistakeTableComponent],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    ChooseLevelModule,
    ReportMistakeRoutingModule,
  ],
  exports: [],
})
export class ReportMistakeModule {}
