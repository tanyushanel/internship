import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeningRoutingModule } from './listening-routing.module';
import { ListeningComponent } from './listening.component';

@NgModule({
  declarations: [ListeningComponent],
  imports: [CommonModule, ListeningRoutingModule],
})
export class ListeningModule {}
