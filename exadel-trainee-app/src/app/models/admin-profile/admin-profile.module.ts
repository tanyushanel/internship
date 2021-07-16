import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TableVirtualScrollModule } from 'ng-cdk-table-virtual-scroll';
import { AdminProfileRouting } from './admin-profile-routing';
import { AdminProfileComponent } from './admin-profile.component';

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [
    CommonModule,
    AdminProfileRouting,
    MatTableModule,
    MatExpansionModule,
    TableVirtualScrollModule,
    ScrollingModule,
  ],
  providers: [DatePipe, ScrollDispatcher],
})
export class AdminProfileModule {}
