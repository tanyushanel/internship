import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
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
}
