import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachProfileComponent } from './coachProfile.component';
import { CoachProfileRoutingModule } from './coachProfile-routing.module';

@NgModule({
  declarations: [CoachProfileComponent],
  imports: [CommonModule, CoachProfileRoutingModule],
})
export class CoachProfileModule {}
