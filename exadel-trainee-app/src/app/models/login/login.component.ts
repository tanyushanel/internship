import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { usersMockDataResponse } from '../../../constants/mock-user-data';
import { UserResponseType } from '../../../interfaces/user.interfaces';

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

  constructor(private fb: FormBuilder, private readonly authStoreService: AuthStoreService) {}

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
      email: this.selectedUser || this.loginReactiveForm.value.userLogin,
      password: 'Pa$$w0rd.' || this.loginReactiveForm.value.userPassword,
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
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
