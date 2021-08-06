import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoachProfileComponent } from './coach-profile.component';
import { CoachProfileRoutingModule } from './coach-profile-routing.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { CoachProfileDialog } from './coach-profile-dialog/coach-profile-dialog.module';
import { CoachProfileTableComponent } from './coach-profile-table/coach-profile-table.component';
import { CoachProfileEditorModule } from '../coach-profile-editor/coach-profile-editor.module';

@NgModule({
  declarations: [CoachProfileComponent, CoachProfileTableComponent],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CoachProfileRoutingModule,
    CoachProfileDialog,
    CoachProfileEditorModule,
    MatProgressSpinnerModule,
  ],
})
export class CoachProfileModule {}
