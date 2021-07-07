import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModel } from './login-routing.model';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, LoginRoutingModel],
  providers: [],
  bootstrap: [AppComponent],
})
export class LoginModule {}
