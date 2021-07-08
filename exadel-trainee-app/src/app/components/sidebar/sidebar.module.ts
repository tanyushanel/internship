import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
