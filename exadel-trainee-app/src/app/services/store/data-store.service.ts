import { Injectable } from '@angular/core';
import { UserResponseType } from '../../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  getUserDataFromStorage(): UserResponseType {
    return JSON.parse(<string>localStorage.getItem('user'));
  }
}
