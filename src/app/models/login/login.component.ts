import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { usersMockDataResponse } from '../../constants/mock-user-data';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { ErrorStoreService } from '../../services/store/error-store.service';
import { ErrorModel, ErrorType } from '../../interfaces/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginReactiveForm!: FormGroup;

  selectedUser: any;

  submitted = false;

  users: UserResponseType[] = usersMockDataResponse;

  readonly error$: Observable<ErrorModel | null> = this.errorStoreService.error$.pipe(
    filter((err) => err?.type === ErrorType.login),
  );

  constructor(
    private fb: FormBuilder,
    private readonly authStoreService: AuthStoreService,
    private readonly errorStoreService: ErrorStoreService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const { controls } = this.loginReactiveForm;
    if (this.loginReactiveForm.invalid) {
      this.submitted = true;
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
    }
    this.submitted = false;
    this.authStoreService.signIn({
      email: this.loginReactiveForm.value.userLogin || this.selectedUser,
      password: this.loginReactiveForm.value.userPassword || 'Pa$$w0rd.',
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  private initForm() {
    this.loginReactiveForm = this.fb.group({
      userLogin: ['', [Validators.required, Validators.email]],
      userPassword: ['Pa$$w0rd.', [Validators.required, Validators.minLength(6)]],
    });
  }
}
