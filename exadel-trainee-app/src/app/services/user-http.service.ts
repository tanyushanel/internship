import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponseType } from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private readonly urlMock = 'http://localhost:3004/users/0';

  constructor(private readonly http: HttpClient) {}

  getUser(): Observable<UserResponseType> {
    return this.http.get<UserResponseType>(this.urlMock);
  }
}
