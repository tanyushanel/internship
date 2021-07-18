import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ErrorStoreService } from '../../services/store/error-store.service';

declare let MediaRecorder: any;

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking-test.component.html',
  styleUrls: ['./speaking-test.component.scss'],
})
export class SpeakingTestComponent implements OnInit {
  mediaRecorder: any;

  chunks: Blob[] = [];

  isRecording = false;

  audioFiles: { src: SafeUrl }[] = [];

  counter = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private dom: DomSanitizer,
    private errorStoreService: ErrorStoreService,
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
        this.audioFiles.push(audio);
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

  toggleRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.startRecording();
    } else {
      this.counter += 1;
      this.stopRecording();
    }
  }

  getColor() {
    return !this.isRecording ? 'primary' : 'warn';
  }

  startRecording() {
    this.mediaRecorder.start();
  }

  stopRecording() {
    this.mediaRecorder.stop();
  }
}
