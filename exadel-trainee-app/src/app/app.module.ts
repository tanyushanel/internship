import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [AppComponent, WarningDialogComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
