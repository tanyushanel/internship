import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
  form!: FormGroup;

  numSymbols = this.form.value.length;

  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  submit() {
    const formData = this.form.value;
    console.log(formData.text.length);
    this.form.reset();
  }
}
