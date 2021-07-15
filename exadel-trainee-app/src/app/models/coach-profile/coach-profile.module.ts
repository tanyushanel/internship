import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coach-profile.component';
import { CoachProfileRoutingModule } from './coach-profile-routing.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [CoachProfileComponent],
  imports: [CommonModule, AngularMaterialCommonModule, CoachProfileRoutingModule],
})
export class CoachProfileModule {}
