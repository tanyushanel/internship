import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserTableUrl } from 'src/app/constants/route-constant';
import { UsersList } from 'src/app/interfaces/test';

export type SortType = 'asc' | null | 'desc';

export interface FilterParams {
  page: number;
  size: number;
  firstName: string | null;
  lastName: string | null;
  sortDirection: SortType;
  sortOn: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  constructor(private http: HttpClient) {}

  getUsersByFilter(filterParams: FilterParams): Observable<UsersList> {
    let params = new HttpParams();

    params = params.append('currentPage', String(filterParams.page));
    params = params.append('pageSize', String(filterParams.size));
    if (filterParams.sortDirection !== null) {
      params = params.append('sortOn', filterParams.sortOn);
      params = params.append('sortDirection', filterParams.sortDirection);
    }
    if (filterParams.firstName !== null) {
      params = params.append('firstName', filterParams.firstName);
    }
    if (filterParams.lastName !== null) {
      params = params.append('lastName', filterParams.lastName);
    }
    return this.http.get<UsersList>(UserTableUrl, { params }).pipe(
      map((userList: UsersList) => userList),
      catchError((err) => throwError(err)),
    );
  }
}
