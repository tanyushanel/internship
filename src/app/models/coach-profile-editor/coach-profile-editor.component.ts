import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopicAddingEditingDialogComponent } from './topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { AddListeningDialogComponent } from './add-listening-dialog/add-listening-dialog.component';
import { CoachQuestionStoreService } from '../../services/store/coach-question-store.service';
import { GrammarAddingEditingDialogComponent } from './grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { CoachEditorTabs, emptyQuestion } from '../../constants/data-constants';
import { CoachTopicStoreService } from '../../services/store/coach-topic-store.service';
import { TableData } from '../../interfaces/question-answer';

@Component({
  selector: 'app-coach-profile-editor',
  templateUrl: './coach-profile-editor.component.html',
  styleUrls: ['./coach-profile-editor.component.scss'],
})
export class CoachProfileEditorComponent implements OnInit, OnDestroy {
  public selectedTab = CoachEditorTabs.grammar;

  constructor(
    public dialog: MatDialog,
    private coachEdit: CoachQuestionStoreService,
    private coachTopic: CoachTopicStoreService,
  ) {}

  tables$: Observable<TableData[]> | undefined;

  tabsTitle: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  ngOnInit(): void {
    this.questionsSubscribe();
  }

  questionsSubscribe() {
    this.coachEdit.questions$
      .pipe(
        map((questions) => {
          const table = questions.map((question) => ({
            id: question.id,
            creationDate: question.creationDate,
            creatorId: question.creatorId,
            level: question.level,
            name: question.nameQuestion,
            number: question.questionNumber,
          }));
          this.tables$ = of(table);
        }),
      )
      .subscribe();
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.coachEdit.getAllQuestion();
      this.selectedTab = CoachEditorTabs.grammar;
      this.questionsSubscribe();
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = CoachEditorTabs.audition;
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = CoachEditorTabs.writingAndSpeaking;
      this.coachTopic.getAllTopic();
      this.coachTopic.topics$
        .pipe(
          map((topics) => {
            const table = topics.map((topic, i) => ({
              id: topic.id,
              creationDate: topic.creationDate,
              creatorId: topic.creatorId,
              level: topic.level,
              name: topic.topicName,
              number: i + 1,
            }));
            this.tables$ = of(table);
          }),
        )
        .subscribe();
    }
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

  ngOnDestroy(): void {
    this.coachTopic.topics$.unsubscribe();
    this.coachEdit.questions$.unsubscribe();
  }
}
