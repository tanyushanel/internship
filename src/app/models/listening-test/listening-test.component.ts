import { hostViewClassName } from '@angular/compiler';
import { Component, ElementRef, Input, AfterViewInit, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { MOCK_QUESTION_LIST_AUDITION, Question } from '../../../constants/mock-grammar-test';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

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
      link: 'https://a1.dlshare.net/sdl/22/b4/d9/86511152_83268387.mp3?name=uroki-angliyskogo--urok-01.mp3&id=3138901',
      artist: 'Artist',
      duration: 5,
    },
  ];

  ngOnInit(): void {
    this.questions = [...MOCK_QUESTION_LIST_AUDITION];
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('.play-pause')
      .addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    const repeatButton = this.elementRef.nativeElement.querySelector(
      '#mat-tab-content-0-1 > div > app-listening > ngx-audio-player > mat-card > button.mat-focus-indicator.ngx-p-1.volume.justify-content-center.mat-button.mat-button-base.ng-star-inserted',
    );
    const playButton = this.elementRef.nativeElement.querySelector('.play-pause');
    playButton.classList.add('play-pause-disable');
    repeatButton.classList.add('play-repeat-disable');
    this.counter += 1;
    if (this.counter === 1) {
      playButton.classList.add('play-pause-disable');
      repeatButton.click();
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
