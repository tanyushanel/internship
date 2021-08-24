import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import {
  GrammarAnswers,
  languageLevel,
  Level,
  ReportStatus,
} from '../../../constants/data-constants';
import { EditionCoachListening, ListeningQuestion } from '../../../interfaces/audition';
import { CoachListeningStoreService } from '../../../services/store/coach-listening-store.service';
import { englishLevelNumber } from '../../../helpers/checks';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';
import { MistakeReport, UpdateMistakeReport } from '../../../interfaces/mistake-report';
import { MistakeReportStoreService } from '../../../services/store/mistake-report-store.service';

@Component({
  selector: 'app-edit-listening-dialog',
  templateUrl: './listening-adding-editing-dialog.component.html',
  styleUrls: ['./listening-adding-editing-dialog.component.scss'],
})
export class ListeningAddingEditingDialogComponent implements OnInit {
  QuestionList = Object.values(GrammarAnswers);

  languageLevel = languageLevel;

  englishLevel: number | undefined;

  questions: ListeningQuestion[] = this.data.questions;

  fileToUpload: null | File | undefined;

  audioSrc: string | undefined;

  srcData: SafeResourceUrl | undefined;

  displayPlayer = false;

  audioFilePath: string | undefined;

  @ViewChild('audio') audio: ElementRef | undefined;

  @ViewChild('player') player: ElementRef | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EditionCoachListening,
    @Inject(MAT_DIALOG_DATA) public mistakeReport: MistakeReport,
    @Inject(MAT_DIALOG_DATA) public updateReport: UpdateMistakeReport,
    public dialogRef: MatDialogRef<ListeningAddingEditingDialogComponent>,
    private coachListening: CoachListeningStoreService,
    private coachAudioData: CoachAudioDataStoreService,
    private sanitizer: DomSanitizer,
    private reportUpdate: MistakeReportStoreService,
  ) {}

  reports = {
    id: this.updateReport.id,
    status: this.updateReport.status,
  };

  ngOnInit(): void {
    if (this.data.isEdit) this.downloadListeningFile();
  }

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

  SolveAndUpdate(): void {
    const questions = {
      id: this.data.id,
      audioFilePath: this.audioFilePath,
      level: this.englishLevel ?? this.data.level,
      questions: this.questions.slice(0, 10),
    };
    this.reports.status = ReportStatus.solve;
    this.coachListening.updateListening(questions);
    this.reportUpdate.updateReportMistake(this.reports);
    this.dialogRef.close();
  }

  RejectMistake(): void {
    this.reports.status = ReportStatus.reject;
    this.reportUpdate.updateReportMistake(this.reports);
    this.dialogRef.close();
  }

  handleFileInput(event: any): void {
    this.fileToUpload = event.target.files[0];
    this.audioSrc = URL.createObjectURL(event.target.files[0]);
    this.srcData = this.sanitizer.bypassSecurityTrustResourceUrl(this.audioSrc);
    this.coachAudioData.uploadListeningFile(event.target.files[0]);
    this.displayPlayer = true;
    this.coachAudioData.audioFilePath$
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

  downloadListeningFile() {
    this.coachAudioData.downloadListeningFile();
    this.displayPlayer = true;
    this.coachAudioData.audioData$
      .pipe(
        map((blob) => {
          if (blob && this.audio && this.player) {
            this.audio.nativeElement.src = URL.createObjectURL(blob);
            this.player.nativeElement.load();
          }
        }),
      )
      .subscribe();
  }
}
