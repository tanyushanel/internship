import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { CoachProfileEditorRoutingModule } from './coach-profile-editor-routing.module';
import { CoachProfileEditorTableComponent } from './coach-profile-editor-table/coach-profile-editor-table.component';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';
import { CoachProfileEditorTopicCreateDialogComponent } from './coach-profile-editor-topic-create-dialog/coach-profile-editor-topic-create-dialog.component';
import { CoachProfileEditorGrammarCreateDialogComponent } from './coach-profile-editor-grammar-create-dialog/coach-profile-editor-grammar-create-dialog.component';
import { CoachProfileEditorGrammarEditDialogComponent } from './coach-profile-editor-grammar-edit-dialog/coach-profile-editor-grammar-edit-dialog.component';
import { CoachProfileEditorTopicEditDialogComponent } from './coach-profile-editor-topic-edit-dialog/coach-profile-editor-topic-edit-dialog.component';

@NgModule({
  declarations: [
    CoachProfileEditorTableComponent,
    CoachProfileEditorComponent,
    CoachProfileEditorGrammarCreateDialogComponent,
    CoachProfileEditorTopicCreateDialogComponent,
    CoachProfileEditorGrammarEditDialogComponent,
    CoachProfileEditorTopicEditDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CoachProfileEditorRoutingModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [CoachProfileEditorTableComponent],
})
export class CoachProfileEditorModule {}
