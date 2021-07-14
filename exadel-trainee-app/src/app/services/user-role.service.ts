import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { UserHttpService } from './user-role-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private readonly userSubject$ = new BehaviorSubject<UserResponseType>({} as UserResponseType);

  readonly activeUser$ = this.userSubject$.asObservable();

  constructor(private readonly userHttpService: UserHttpService) {}

  private set activeUser(user: UserResponseType) {
    this.userSubject$.next(user);
  }

  getActiveUser(): void {
    this.userHttpService.getUser().subscribe((user) => {
      this.activeUser = user;
    });
  }
}
