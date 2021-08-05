import { hostViewClassName } from '@angular/compiler';
import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { Track } from 'ngx-audio-player';
import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators';
import { Test } from '../../interfaces/test';
import { MOCK_QUESTION_LIST_AUDITION, Question } from '../../../constants/mock-grammar-test';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() test$!: Observable<Test | null>;

  questions: Question[] = [];

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

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.questions = [...MOCK_QUESTION_LIST_AUDITION];
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('.play-pause')
      .addEventListener('click', this.onClick.bind(this));
  }

  ngAfterViewChecked() {
    const repeatButton = this.elementRef.nativeElement.querySelector(
      '#mat-tab-content-0-1 > div > app-listening > ngx-audio-player > mat-card > button.mat-focus-indicator.ngx-p-1.volume.justify-content-center.mat-button.mat-button-base.ng-star-inserted:not(.play-repeat-disable)',
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
}
