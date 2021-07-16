import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private cd: ChangeDetectorRef, private dom: DomSanitizer) {}

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
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Error capturing audio.');
    }
  }

  toggleRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording === true) {
      this.startRecording();
    } else {
      this.stopRecording();
    }
  }

  getColor() {
    return this.isRecording === false ? 'primary' : 'warn';
  }

  startRecording() {
    this.mediaRecorder.start();
  }

  stopRecording() {
    this.mediaRecorder.stop();
  }
}
