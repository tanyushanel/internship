import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { CoachProfileEditorRoutingModule } from './coach-profile-editor-routing.module';
import { EditorTableComponent } from './editor-table/editor-table.component';
import { CoachProfileEditorComponent } from './coach-profile-editor.component';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { ChooseLevelModule } from '../../components/choose-level/choose-level.module';
import { ListeningAddingEditingDialogComponent } from './listening-adding-editing-dialog/listening-adding-editing-dialog.component';

@NgModule({
  declarations: [
    EditorTableComponent,
    CoachProfileEditorComponent,
    TopicAddingEditingDialogComponent,
    GrammarAddingEditingDialogComponent,
    ListeningAddingEditingDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialCommonModule,
    CoachProfileEditorRoutingModule,
    ChooseLevelModule,
    AngularMaterialCommonModule,
  ],
  exports: [],
})
export class CoachProfileEditorModule {}
