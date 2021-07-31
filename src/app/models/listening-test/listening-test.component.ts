import { hostViewClassName } from '@angular/compiler';
import { Component, ElementRef, Input, AfterViewInit, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  counter = 0;

  msaapAutoPlay = false;

  msaapDisplayTitle = false;

  button = document.querySelector('.play-pause');

  msaapDisplayPlayList = false;

  msaapPageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;

  msaapDisplayRepeatControls = true;

  msaapDisplayArtist = false;

  msaapDisplayDuration = false;

  msaapDisablePositionSlider = false;

  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'https://a1.dlshare.net/sdl/22/b4/d9/86511152_83268387.mp3?name=uroki-angliyskogo--urok-01.mp3&id=3138901',
      artist: 'Artist',
      duration: 5,
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('.play-pause')
      .addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.elementRef.nativeElement.querySelector('.play-pause').classList.add('play-pause-disable');
    this.counter += 1;
    if (this.counter === 1) {
      this.elementRef.nativeElement
        .querySelector(
          '#mat-tab-content-0-1 > div > app-listening > ngx-audio-player > mat-card > button.mat-focus-indicator.ngx-p-1.volume.justify-content-center.mat-button.mat-button-base.ng-star-inserted',
        )
        .click();
      this.elementRef.nativeElement
        .querySelector(
          '#mat-tab-content-0-1 > div > app-listening > ngx-audio-player > mat-card > button.mat-focus-indicator.ngx-p-1.volume.justify-content-center.mat-button.mat-button-base.ng-star-inserted',
        )
        .classList.add('play-repeat-disable');
    } else {
      this.elementRef.nativeElement
        .querySelector('.play-pause')
        .classList.remove('play-pause-disable');
    }
  }

  onEnded() {
    this.counter += 1;
    if (this.counter <= 4) {
      this.elementRef.nativeElement
        .querySelector('.play-pause')
        .classList.remove('play-pause-disable');
    } else {
      this.elementRef.nativeElement
        .querySelector('.play-pause')
        .classList.add('play-pause-disable');
    }
  }
}
