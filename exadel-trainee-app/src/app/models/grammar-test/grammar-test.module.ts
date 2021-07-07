import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarTestRoutingModule } from './grammar-test-routing.module';
import { GrammarTestComponent } from './grammar-test.component';

@NgModule({
  declarations: [GrammarTestComponent],
  imports: [CommonModule, GrammarTestRoutingModule],
})
export class GrammarTestModule {}
