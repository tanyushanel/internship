import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { CoachProfileEditorRoutingModule } from './coach-profile-editor-routing.module';
import { CoachProfileEditorTableComponent } from './coach-profile-editor-table/coach-profile-editor-table.component';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';
import { EditListeningDialogModule } from './edit-listening-dialog/edit-listening-dialog.module';
import { AddListeningDialogModule } from './add-listening-dialog/add-listening-dialog.module';

@NgModule({
  declarations: [CoachProfileEditorTableComponent, CoachProfileEditorComponent],
  imports: [
    CommonModule,
    EditListeningDialogModule,
    AddListeningDialogModule,
    AngularMaterialCommonModule,
    CoachProfileEditorRoutingModule,
    MatIconModule,
  ],
  exports: [CoachProfileEditorTableComponent],
})
export class CoachProfileEditorModule {}
