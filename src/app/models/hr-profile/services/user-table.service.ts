import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserTableUrl } from 'src/app/constants/route-constant';
import { UsersList } from 'src/app/interfaces/test';

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  constructor(private http: HttpClient) {}

  findAll(page: number, size: number): Observable<UsersList> {
    let params = new HttpParams();

    params = params.append('currentPage', String(page));
    params = params.append('pageSize', String(size));

    return this.http.get<UsersList>(UserTableUrl, { params }).pipe(
      map((userList: UsersList) => userList),
      catchError((err) => throwError(err)),
    );
  }

  paginateFirstName(page: number, size: number, firstName: string): Observable<UsersList> {
    let params = new HttpParams();

    params = params.append('currentPage', String(page));
    params = params.append('pageSize', String(size));
    params = params.append('firstName', firstName);

    return this.http.get<UsersList>(UserTableUrl, { params }).pipe(
      map((userList: UsersList) => userList),
      catchError((err) => throwError(err)),
    );
  }

  paginateLastName(page: number, size: number, lastName: string): Observable<UsersList> {
    let params = new HttpParams();

    params = params.append('currentPage', String(page));
    params = params.append('pageSize', String(size));
    params = params.append('lastName', lastName);

    return this.http.get<UsersList>(UserTableUrl, { params }).pipe(
      map((userList: UsersList) => userList),
      catchError((err) => throwError(err)),
    );
  }
}
