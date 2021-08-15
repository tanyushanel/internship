import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FinishTestComponent } from './finish-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [FinishTestComponent],
  imports: [CommonModule, AngularMaterialCommonModule, MatButtonModule],
})
export class FinishTestModule {}
