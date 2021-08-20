import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Track } from 'ngx-audio-player';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Question } from '../../interfaces/question-answer';
import { CoachAudioDataStoreService } from '../../services/store/coach-audio-data-store.service';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() questions: Question[] | null = null;

  @Input() testId: string | undefined;

  @Output() answersListening = new EventEmitter<string[] | null>();

  counter = 0;

  msaapAutoPlay = false;

  msaapDisplayTitle = false;

  msaapDisplayPlayList = false;

  msaapPageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;

  msaapDisplayRepeatControls = true;

  msaapDisplayArtist = false;

  msaapDisplayDuration = false;

  msaapDisablePositionSlider = true;

  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'https://media1.vocaroo.com/mp3/11lNyvchRTGj',
      artist: 'Artist',
      duration: 5,
    },
  ];

  constructor(
    private dom: DomSanitizer,
    private elementRef: ElementRef,
    private audioDataStoreService: CoachAudioDataStoreService,
  ) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('.play-pause')
      .addEventListener('click', this.onClick.bind(this));
  }

  ngAfterViewChecked() {
    const repeatButton = this.elementRef.nativeElement.querySelector(
      'ngx-audio-player > mat-card > button.mat-focus-indicator.ngx-p-1.volume.justify-content-center.mat-button.mat-button-base.ng-star-inserted:not(.play-repeat-disable)',
    );
    if (repeatButton) {
      repeatButton.classList.add('play-repeat-disable');
      setTimeout(() => {
        repeatButton.click();
      });
    }
  }

  onClick() {
    const playButton = this.elementRef.nativeElement.querySelector('.play-pause');
    playButton.classList.add('play-pause-disable');
    this.counter += 1;
    if (this.counter === 1) {
      playButton.classList.add('play-pause-disable');
    }
  }

  onEnded() {
    const playButton = this.elementRef.nativeElement.querySelector('.play-pause');
    this.counter += 1;
    if (this.counter <= 4) {
      playButton.classList.remove('play-pause-disable');
    } else {
      playButton.classList.add('play-pause-disable');
    }
  }

  onAnswersSubmit(answers: string[] | null): void {
    this.answersListening.emit(answers);
  }

  ngOnInit() {
    this.audioDataStoreService.downloadTestListening();
    this.audioDataStoreService.audioData$
      .pipe(
        map(async (blob) => {
          const audioURL = URL.createObjectURL(blob);
          const audio = {
            src: this.dom.bypassSecurityTrustUrl(audioURL),
          };
          this.msaapPlaylist[0].link = audio.src as string;
        }),
      )
      .subscribe();
  }
}
