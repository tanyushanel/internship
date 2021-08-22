import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultRoutingModule, AngularMaterialCommonModule],
})
export class ResultModule {}
