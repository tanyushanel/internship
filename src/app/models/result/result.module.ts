import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultRoutingModule, MatCardModule, MatButtonModule],
})
export class ResultModule {}
