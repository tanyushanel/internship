import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { SpeakingComponent } from './speaking.component';
import { SpeakingRoutingModule } from './speaking-routing.module';

@NgModule({
  declarations: [SpeakingComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, SpeakingRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class SpeakingModule {}
