import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './userProfile-routing.module';
import { UserProfileComponent } from './userProfile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutingModule],
})
export class UserProfileModule {}
