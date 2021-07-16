import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeningTestRoutingModule } from './listening-test-routing.module';
import { ListeningTestComponent } from './listening-test.component';

@NgModule({
  declarations: [ListeningTestComponent],
  imports: [CommonModule, ListeningTestRoutingModule],
})
export class ListeningTestModule {}
