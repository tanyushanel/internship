/* eslint-disable prettier/prettier */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = Math.floor(value - hours * 60);
    return `${`00${hours}`.slice(-2)}:${`00${minutes}`.slice(-2)}`;
  }
}
