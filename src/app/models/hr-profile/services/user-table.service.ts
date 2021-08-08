import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserTableUrl } from 'src/app/constants/route-constant';
import { UsersList, UserTable } from 'src/app/interfaces/test';

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersList> {
    return this.http.get<UsersList>(UserTableUrl);
  }
}
