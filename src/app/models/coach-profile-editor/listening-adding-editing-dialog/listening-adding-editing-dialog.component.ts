import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { GrammarAnswers, languageLevel, Level } from '../../../constants/data-constants';
import { EditionCoachListening, ListeningQuestion } from '../../../interfaces/audition';
import { CoachListeningStoreService } from '../../../services/store/coach-listening-store.service';
import { englishLevelNumber } from '../../../helpers/checks';

@Component({
  selector: 'app-edit-listening-dialog',
  templateUrl: './listening-adding-editing-dialog.component.html',
  styleUrls: ['./listening-adding-editing-dialog.component.scss'],
})
export class ListeningAddingEditingDialogComponent {
  QuestionList = Object.values(GrammarAnswers);

  languageLevel = languageLevel;

  englishLevel: number | undefined;

  questions: ListeningQuestion[] = this.data.questions;

  fileToUpload: null | File | undefined;

  audioSrc: string | undefined;

  srcData: SafeResourceUrl | undefined;

  audioFilePath: string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EditionCoachListening,
    public dialogRef: MatDialogRef<ListeningAddingEditingDialogComponent>,
    private coachListening: CoachListeningStoreService,
    private sanitizer: DomSanitizer,
  ) {}

  levelChangeHandler($event: Level) {
    this.englishLevel = englishLevelNumber($event);
  }

  radioChangeHandler(
    numberQuestion: number,
    numberAnswer: number,
    currentQuestion: ListeningQuestion,
  ) {
    this.questions = this.questions.map((question, i) =>
      numberQuestion === i
        ? {
            ...question,
            answers: currentQuestion.answers.map((answer, y) =>
              y === numberAnswer ? { ...answer, isRight: true } : { ...answer, isRight: false },
            ),
          }
        : { ...question },
    );
  }

  updateData() {
    const questions = {
      id: this.data.id,
      audioFilePath: this.audioFilePath,
      level: this.englishLevel ?? this.data.level,
      questions: this.questions.slice(0, 10), // for wrong data in backend
    };

    if (this.data.isEdit) {
      this.coachListening.updateListening(questions);
    } else {
      this.coachListening.createListening(questions);
    }
    this.dialogRef.close();
  }

  handleFileInput(event: any): void {
    this.fileToUpload = event.target.files[0];
    this.audioSrc = URL.createObjectURL(event.target.files[0]);
    this.srcData = this.sanitizer.bypassSecurityTrustResourceUrl(this.audioSrc);
    this.coachListening.uploadListeningFile(event.target.files[0]);
    this.coachListening.audioFilePath$
      .pipe(
        map((path) => {
          this.audioFilePath = path.pathfile;
        }),
      )
      .subscribe();
  }

  setNameQuestion(event: Event, i: number): void {
    this.questions[i].nameQuestion = (event.target as HTMLInputElement).value;
  }

  setNameAnswer(event: Event, i: number, y: number): void {
    this.questions[i].answers[y].nameAnswer = (event.target as HTMLInputElement).value;
  }
}
