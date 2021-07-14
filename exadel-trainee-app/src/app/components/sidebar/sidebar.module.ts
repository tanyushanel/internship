import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
