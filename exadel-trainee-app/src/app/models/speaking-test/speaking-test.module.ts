import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SpeakingTestComponent } from './speaking-test.component';
import { SpeakingTestRoutingModule } from './speaking-test-routing.module';

@NgModule({
  imports: [SpeakingTestRoutingModule, CommonModule, FormsModule, MatButtonModule, MatCardModule],
  declarations: [SpeakingTestComponent],
})
export class SpeakingTestModule {}
