/* eslint-disable prettier/prettier */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number, _args?: any): any {
    return `${Math.floor(value / 60)}: 0${(value % 60).toString().slice(-2)}`;
  }
}
