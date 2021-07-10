import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile.component';
import { AdminProfileRouting } from './admin-profile-routing';

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [CommonModule, AdminProfileRouting],
})
export class AdminProfileModule {}
