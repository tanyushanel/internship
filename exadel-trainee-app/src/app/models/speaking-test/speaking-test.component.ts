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

  chunks:Blob[] = [];
  audioFiles:{src: SafeUrl}[] = [];

  constructor(private cd: ChangeDetectorRef, private dom: DomSanitizer) {

  }

  async ngOnInit() {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log(stream);
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.onstop = () => {
        console.log('data available after MediaRecorder.stop() called.');
        const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
        this.chunks = [];
        const audioURL = URL.createObjectURL(blob);
        console.log(this.chunks, blob, audioURL);
        var audio = {
          src: this.dom.bypassSecurityTrustUrl(audioURL),
        };
        //audio.controls = true;
        console.log(audio, audioURL, this.dom.bypassSecurityTrustUrl(audioURL));
        //audio.src = audioURL;
        this.audioFiles.push(audio);
        console.log(audioURL);
        console.log('recorder stopped');
        this.cd.detectChanges();
      };
      this.mediaRecorder.ondataavailable = (e:{data:Blob}) => {
        this.chunks.push(e.data);
      };
  } catch(err) {
    alert('Error capturing audio.');
  } finally {

  }
}

  startRecording() {
    this.mediaRecorder.start();
    console.log(this.mediaRecorder.state);
    console.log('recorder started');
  }
  stopRecording() {
    this.mediaRecorder.stop();
    console.log(this.mediaRecorder.state);
    console.log('record stopped');
  }
}
