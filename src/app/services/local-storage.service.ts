import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getAccessToken() {
    return localStorage.getItem('token');
  }

  setAccessToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearAccessToken(): void {
    localStorage.removeItem('token');
  }
}
