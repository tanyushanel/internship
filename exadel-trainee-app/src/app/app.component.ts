import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exadel-trainee-app';

  openWarningDialog(e: Event): void {
    e.preventDefault();
    e.returnValue = true;
  }
}
