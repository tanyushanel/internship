import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDialogModule } from '../dialog-module/common-dialog.module';
import { HrProfileComponent } from './hr-profile.component';
import { HrProfileRoutingModule } from './hr-profile-routing.module';

@NgModule({
  declarations: [HrProfileComponent],
  imports: [CommonModule, HrProfileRoutingModule, CommonDialogModule],
})
export class HrProfileModule {}
