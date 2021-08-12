import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { CoachProfileEditorRoutingModule } from './coach-profile-editor-routing.module';
import { EditorTableComponent } from './editor-table/editor-table.component';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { ChooseLevelModule } from '../../components/choose-level/choose-level.module';
import { ListeningAddingEditingDialogModule } from './edit-listening-dialog/listening-adding-editing-dialog.module';
import { AddListeningDialogModule } from './add-listening-dialog/add-listening-dialog.module';

@NgModule({
  declarations: [
    EditorTableComponent,
    CoachProfileEditorComponent,
    TopicAddingEditingDialogComponent,
    GrammarAddingEditingDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CoachProfileEditorRoutingModule,
    ListeningAddingEditingDialogModule,
    MatIconModule,
    MatOptionModule,
    AddListeningDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    ChooseLevelModule,
    MatMenuModule,
  ],
  exports: [EditorTableComponent],
})
export class CoachProfileEditorModule {}
