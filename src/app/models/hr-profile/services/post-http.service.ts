import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiAssignTest } from '../../../interfaces/user.interfaces';
import { PostAssignTest, RefreshUserDataUrl } from '../../../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class PostHttpService {
  constructor(private readonly http: HttpClient) {}

  assignTest(AssignTestModel: ApiAssignTest): Observable<unknown> {
    return this.http.post(PostAssignTest, { ...AssignTestModel });
  }
}
