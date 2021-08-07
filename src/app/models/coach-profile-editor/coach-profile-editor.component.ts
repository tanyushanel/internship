import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Subject } from 'rxjs';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { AddListeningDialogComponent } from './add-listening-dialog/add-listening-dialog.component';
import { CoachQuestionStoreService } from '../../services/store/coach-question-store.service';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import {
  MOCK_AUDITION_QUESTIONS,
  MOCK_WRITING_AND_SPEAKING_QUESTIONS,
} from '../../../mocks/users-utils.mock';
import { QuestionList } from '../../interfaces/question-answer';
import { CoachEditorTabs } from '../../constants/data-constants';
import { emptyQuestion } from '../../constants/mock-user-data';

@Component({
  selector: 'app-coach-profile-editor',
  templateUrl: './coach-profile-editor.component.html',
  styleUrls: ['./coach-profile-editor.component.scss'],
})
export class CoachProfileEditorComponent implements OnInit {
  public selectedTab = CoachEditorTabs.grammar;

  constructor(public dialog: MatDialog, private coachEdit: CoachQuestionStoreService) {}

  tables$: Observable<QuestionList[]> | Subject<QuestionList[]> = this.coachEdit.questions$;

  tabsTitle: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.coachEdit.getAllQuestion();
      this.selectedTab = CoachEditorTabs.grammar;
      this.tables$ = this.coachEdit.questions$;
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = CoachEditorTabs.audition;
      this.tables$ = of(MOCK_AUDITION_QUESTIONS as any as QuestionList[]);
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = CoachEditorTabs.writingAndSpeaking;
      this.tables$ = of(MOCK_WRITING_AND_SPEAKING_QUESTIONS as any as QuestionList[]);
    }
  }

  ngOnInit(): void {
    this.coachEdit.getAllQuestion();
  }

  onAddAudioClick(): void {
    this.dialog.open(AddListeningDialogComponent, {
      autoFocus: false,
    });
  }

  openGrammarModal() {
    this.dialog.open(GrammarAddingEditingDialogComponent, {
      data: { ...emptyQuestion, isEdit: false },
    });
  }

  openTopicModal() {
    this.dialog.open(TopicAddingEditingDialogComponent, { data: { isEdit: false } });
  }
}
