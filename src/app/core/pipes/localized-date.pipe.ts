import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'localizedDate'
})
export class LocalizedDatePipe implements PipeTransform {

  transform(value: any, pattern: string, currentLang: string): any {
    const datePipe = new DatePipe(currentLang);
    return datePipe.transform(value, pattern);
  }

}
