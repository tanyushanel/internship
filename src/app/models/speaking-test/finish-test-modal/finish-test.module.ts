import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FinishTestComponent } from './finish-test.component';

@NgModule({
  declarations: [FinishTestComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class FinishTestModule {}
