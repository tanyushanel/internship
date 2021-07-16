import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { UserHttpService } from '../user-http.service';
import { usersMockDataResponse } from '../../../constants/mock-user-data';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private readonly userSubject$ = new BehaviorSubject<UserResponseType>(
    usersMockDataResponse[Math.floor(Math.random() * 4)],
  );

  readonly activeUser$ = this.userSubject$.asObservable();

  constructor(private readonly userHttpService: UserHttpService) {}

  private set activeUser(user: UserResponseType) {
    this.userSubject$.next(user);
  }

  getActiveUser(): void {
    this.userHttpService.getUser().subscribe((user) => {
      this.activeUser = { ...user };
    });
  }
}
