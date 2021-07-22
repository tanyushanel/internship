import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { SignIn } from '../interfaces/user';
import { LoginApiUrl } from '../../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private readonly http: HttpClient) {}

  signIn(signInModel: SignIn): Observable<UserResponseType> {
    return this.http.post<UserResponseType>(LoginApiUrl, { ...signInModel });
  }

  getUser(): Observable<UserResponseType> {
    return this.http.get<UserResponseType>('http://elevel-001-site1.btempurl.com/api/User/info');
  }
}
