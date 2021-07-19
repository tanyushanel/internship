import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Route } from '../../../constants/route-constant';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
  form!: FormGroup;

  disabled = false;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  submit() {
    const formData = this.form.value;
    this.form.disable();
    this.disabled = true;
  }

  clear() {
    this.form.reset();
  }

  nextTest() {
    this.router.navigate([Route.speaking]);
  }
}
