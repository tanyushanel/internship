import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonTestService {
  selectedIndex = 0;

  // currentIndex = new BehaviorSubject<number>(this.selectedIndex);
}
