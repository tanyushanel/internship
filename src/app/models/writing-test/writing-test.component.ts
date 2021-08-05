import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from '../../interfaces/test';
import { Route } from '../../constants/route-constant';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
  @Input() test$!: Observable<Test | null>;

  form!: FormGroup;

  disabled = false;

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

  nextTest() {}
}
