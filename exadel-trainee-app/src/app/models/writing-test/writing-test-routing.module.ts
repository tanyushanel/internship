import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WritingTestComponent } from "./writing-test.component";

const routes: Routes = [
    {
        path: '',
        component: WritingTestComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WritingTestRoutingModule {}
