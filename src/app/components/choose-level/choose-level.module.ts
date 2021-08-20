import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ChooseLevelComponent } from './choose-level.component';
import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';

@NgModule({
  declarations: [ChooseLevelComponent],
  imports: [CommonModule, MatSelectModule, AngularMaterialCommonModule],
  exports: [ChooseLevelComponent],
})
export class ChooseLevelModule {}
