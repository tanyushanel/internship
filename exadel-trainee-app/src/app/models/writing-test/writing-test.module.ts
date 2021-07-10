import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WritingTestRoutingModule } from "./writing-test-routing.module";
import { WritingTestComponent } from "./writing-test.component";

@NgModule({
    declarations: [WritingTestComponent],
    imports: [CommonModule, WritingTestRoutingModule]
})
export class WritingTestModule {}