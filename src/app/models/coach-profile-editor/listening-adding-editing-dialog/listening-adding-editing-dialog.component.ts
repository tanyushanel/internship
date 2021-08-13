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

  // fileToUpload: File = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EditionCoachListening,
    public dialogRef: MatDialogRef<ListeningAddingEditingDialogComponent>,
    private coachListening: CoachListeningStoreService,
  ) {
    console.log(this.data);
  }

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
      audioFilePath: this.data.audioFilePath,
      level: this.englishLevel,
      questions: [...this.questions],
    };
    console.log(questions);
    if (this.data.isEdit) {
      this.coachListening.updateListening(questions);
    } else {
      this.coachListening.createListening(questions);
    }
    this.dialogRef.close();
  }

  handleFileInput(event: any) {
    console.log(event.target.files);
  }
}
