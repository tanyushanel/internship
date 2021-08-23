import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, AngularMaterialCommonModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
