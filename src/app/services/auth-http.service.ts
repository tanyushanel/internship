import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignIn, UserResponseType } from '../interfaces/user.interfaces';
import { LoginApiUrl, RefreshUserDataUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private readonly http: HttpClient) {}

  signIn(signInModel: SignIn): Observable<UserResponseType> {
    return this.http.post<UserResponseType>(LoginApiUrl, { ...signInModel });
  }

  getUser(): Observable<UserResponseType> {
    return this.http.get<UserResponseType>(RefreshUserDataUrl);
  }
}
