import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly loading$: Observable<boolean> = this.loadingService.loading$;

  constructor(private loadingService: LoadingIndicatorService) {}

  title = 'internship';
}
