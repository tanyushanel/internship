import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { CoachEditorTabs } from '../../../constants/data-constants';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { AddListeningDialogComponent } from './add-listening-dialog/add-listening-dialog.component';
import { CoachEditStoreService } from './coach-edit-store.service';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';

@Component({
  selector: 'app-coach-profile-editor',
  templateUrl: './coach-profile-editor.component.html',
  styleUrls: ['./coach-profile-editor.component.scss'],
})
export class CoachProfileEditorComponent implements OnInit {
  public selectedTab = CoachEditorTabs.grammar;

  constructor(public dialog: MatDialog, private coachEdit: CoachEditStoreService) {}

  tables$ = this.coachEdit.questions$;

  tabsTitle: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.selectedTab = CoachEditorTabs.grammar;
      this.tables$ = this.coachEdit.questions$;
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = CoachEditorTabs.audition;
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = CoachEditorTabs.writingAndSpeaking;
    }
  }

  ngOnInit(): void {}

  onAddAudioClick(): void {
    this.dialog.open(AddListeningDialogComponent, {
      autoFocus: false,
    });
  }

  openGrammarModal() {
    this.dialog.open(GrammarAddingEditingDialogComponent, { data: { isEdit: false } });
  }

  openTopicModal() {
    this.dialog.open(TopicAddingEditingDialogComponent, { data: { isEdit: false } });
  }
}
