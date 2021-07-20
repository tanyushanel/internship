import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTestComponent } from './common-test.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [CommonTestComponent],
  imports: [CommonModule, AngularMaterialCommonModule],
  exports: [CommonTestComponent],
})
export class CommonTestModule {}
