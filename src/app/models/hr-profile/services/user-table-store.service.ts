import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UsersList, UserTable } from 'src/app/interfaces/test';
import { AuthStoreService } from 'src/app/services/store/auth-store.service';
import { UserTableService } from './user-table.service';

@Injectable({
  providedIn: 'root',
})
export class UserTableStoreService {
  public usersSubject$ = new BehaviorSubject<UsersList | null>(null);

  public usersResults$ = this.usersSubject$.asObservable();

  private set userTableResults(usersResults: UsersList) {
    this.usersSubject$.next(usersResults);
  }

  constructor(private userTableService: UserTableService) {}

  getUsersResults(): void {
    this.userTableService.getUsers().subscribe((res) => {
      this.userTableResults = res;
    });
  }
}
