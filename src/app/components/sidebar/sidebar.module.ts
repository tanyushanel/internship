import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NotificationComponent } from './notification/notification.component';
import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';

@NgModule({
  declarations: [SidebarComponent, NotificationComponent],
  imports: [CommonModule, RouterModule, AngularMaterialCommonModule],
  exports: [SidebarComponent, NotificationComponent],
})
export class SidebarModule {}
