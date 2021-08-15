import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { languageLevel, GrammarAnswers, Level } from '../../../constants/data-constants';
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

  fileToUpload: File | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EditionCoachListening,
    public dialogRef: MatDialogRef<ListeningAddingEditingDialogComponent>,
    private coachListening: CoachListeningStoreService,
  ) {}

  levelChangeHandler($event: Level) {
    this.englishLevel = englishLevelNumber($event);
  }

  radioChangeHandler(numberAnswer: number, currentQuestion: ListeningQuestion) {
    this.questions = this.questions.map((question) => {
      if (question.id === currentQuestion.id) {
        return {
          ...question,
          answers: currentQuestion.answers.map((answers, i) =>
            i === numberAnswer ? { ...answers, isRight: true } : { ...answers, isRight: false },
          ),
        };
      }
      return { ...question };
    });
  }

  updateData() {
    const questions = {
      id: this.data.id,
      audioFilePath: this.fileToUpload?.name ?? this.data.audioFilePath,
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

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
    this.coachListening.uploadListeningFile(event.target.files[0]);
  }

  setNameQuestion(event: any, i: number) {
    this.questions[i].nameQuestion = event.target.value;
  }

  setNameAnswer(event: any, i: number, y: number) {
    this.questions[i].answers[y].nameAnswer = event.target.value;
  }
}
