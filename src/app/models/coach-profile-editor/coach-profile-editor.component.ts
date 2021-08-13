import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { CoachQuestionStoreService } from '../../services/store/coach-question-store.service';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import {
  CoachEditorTabs,
  emptyListening,
  emptyQuestion,
  emptyTopic,
} from '../../constants/data-constants';
import { CoachTopicStoreService } from '../../services/store/coach-topic-store.service';
import { TableData } from '../../interfaces/question-answer';
import { ListeningAddingEditingDialogComponent } from './listening-adding-editing-dialog/listening-adding-editing-dialog.component';
import { CoachListeningStoreService } from '../../services/store/coach-listening-store.service';

@Component({
  selector: 'app-coach-profile-editor',
  templateUrl: './coach-profile-editor.component.html',
  styleUrls: ['./coach-profile-editor.component.scss'],
})
export class CoachProfileEditorComponent implements OnInit {
  public selectedTab = CoachEditorTabs.grammar;

  constructor(
    public dialog: MatDialog,
    private coachEdit: CoachQuestionStoreService,
    private coachTopic: CoachTopicStoreService,
    private coachListening: CoachListeningStoreService,
  ) {}

  tables$: Observable<TableData[]> = this.coachEdit.questions$;

  tabsTitle: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  ngOnInit(): void {
    this.coachEdit.getAllQuestion();
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.coachEdit.getAllQuestion();
      this.selectedTab = CoachEditorTabs.grammar;
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = CoachEditorTabs.audition;
      this.coachListening.getAllListening();
      this.tables$ = this.coachListening.listens$;
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = CoachEditorTabs.writingAndSpeaking;
      this.coachTopic.getAllTopic();
      this.tables$ = this.coachTopic.topics$;
    }
  }

  onAddAudioClick(): void {
    this.dialog.open(ListeningAddingEditingDialogComponent, {
      data: { ...emptyListening, isEdit: false },
      disableClose: true,
    });
  }

  openGrammarModal() {
    this.dialog.open(GrammarAddingEditingDialogComponent, {
      data: { ...emptyQuestion, isEdit: false },
      disableClose: true,
    });
  }

  openTopicModal() {
    this.dialog.open(TopicAddingEditingDialogComponent, {
      data: { ...emptyTopic, isEdit: false },
      disableClose: true,
    });
  }
}
