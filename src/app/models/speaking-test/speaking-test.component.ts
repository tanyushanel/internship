import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ErrorStoreService } from '../../services/store/error-store.service';
import { Route } from '../../../constants/route-constant';

declare let MediaRecorder: any;

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking-test.component.html',
  styleUrls: ['./speaking-test.component.scss'],
})
export class SpeakingTestComponent implements OnInit {
  mediaRecorder: any;

  chunks: Blob[] = [];

  obj = {};

  isRecording = false;

  audioFile: { src: SafeUrl } | null = null;

  counter = 0;

  intervalId = 0;

  message = '';

  minutes = 5;

  seconds = 0;

  numberAttempt = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private dom: DomSanitizer,
    private errorStoreService: ErrorStoreService,
    private readonly router: Router,
  ) {}

  async ngOnInit() {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
        this.chunks = [];
        const audioURL = URL.createObjectURL(blob);
        const audio = {
          src: this.dom.bypassSecurityTrustUrl(audioURL),
        };
        this.audioFile = audio;
        this.cd.detectChanges();
      };
      this.mediaRecorder.ondataavailable = (e: { data: Blob }) => {
        this.chunks.push(e.data);
      };
    } catch (e) {
      this.errorStoreService.setError({
        message: e.message,
        time: Date.now(),
      });
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {
    this.countDown();
  }

  stopTimer() {
    this.clearTimer();
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        this.toggleRecording();
      } else if (this.seconds === 0) {
        this.minutes -= 1;
        this.seconds = 59;
        return;
      }
      this.seconds -= 1;
    }, 1000);
  }

  resetTimer() {
    this.minutes = 5;
    this.seconds = 0;
  }

  toggleRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.startRecording();
    } else {
      this.counter += 1;
      this.stopRecording();
    }
  }

  getSeconds() {
    return this.seconds >= 10 ? this.seconds : `0${this.seconds}`;
  }

  getColor() {
    return !this.isRecording ? 'primary' : 'warn';
  }

  counterOfAttempt() {
    this.numberAttempt += 1;
  }

  startRecording() {
    this.mediaRecorder.start();
    this.startTimer();
    this.counterOfAttempt();
    this.resetTimer();
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.stopTimer();
  }

  finishTest() {
    this.router.navigate([Route.result]);
  }
}
