import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrProfileComponent } from './hr-profile.component';
import { HrProfileRoutingModule } from './hr-profile-routing.module';

@NgModule({
  declarations: [HrProfileComponent],
  imports: [CommonModule, HrProfileRoutingModule],
})
export class HrProfileModule {}
