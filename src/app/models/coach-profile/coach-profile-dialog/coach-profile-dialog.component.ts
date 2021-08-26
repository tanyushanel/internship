import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CoachTest } from '../../../interfaces/coach-edit';
import { CoachTestsStoreService } from '../service/coach-tests-store.service';
import { CoachListeningStoreService } from '../../../services/store/coach-listening-store.service';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';

@Component({
  selector: 'app-coach-profile-dialog',
  templateUrl: './coach-profile-dialog.component.html',
  styleUrls: ['./coach-profile-dialog.component.scss'],
})
export class CoachProfileDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CoachTest,
    public dialogRef: MatDialogRef<CoachProfileDialogComponent>,
    private coachCheck: CoachTestsStoreService,
    private coachListening: CoachListeningStoreService,
    private coachAudioData: CoachAudioDataStoreService,
  ) {}

  srcData: SafeResourceUrl | undefined;

  audioFilePath: string | undefined;

  form!: FormGroup;

  markPattern = '^[0-9]$|[1][0]$';

  @ViewChild('audio') audio: ElementRef | undefined;

  @ViewChild('player') player: ElementRef | undefined;

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl(this.data.comment),
      speakingMark: new FormControl(this.data.speakingMark, [Validators.pattern(this.markPattern)]),
      essayMark: new FormControl(this.data.essayMark, [Validators.pattern(this.markPattern)]),
    });
    this.downloadListeningFile();
  }

  submitTest(): void {
    const formData = { ...this.form.value };

    const question = {
      essayMark: formData.essayMark,
      speakingMark: formData.speakingMark,
      comment: formData.comment,
    };
    const id = {
      id: this.data.id,
    };
    if (this.form.valid) {
      this.coachCheck.sendCheckTest(question, id);
      this.dialogRef.close();
    }
  }

  downloadListeningFile() {
    this.coachAudioData.downloadAudio(this.data.id);
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
