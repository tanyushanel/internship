import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersList, UserTable } from 'src/app/interfaces/test';
import { UserTableUrl } from 'src/constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersList> {
    return this.http.get<UsersList>(UserTableUrl);
  }
}
