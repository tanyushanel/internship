import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthStoreService } from 'src/app/services/store/auth-store.service';
import { UserTableService } from './user-table.service';

@Injectable({
  providedIn: 'root',
})
export class UserTableStoreService {
  constructor(private userTableService: UserTableService) {}
}
