import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // This will force the pipe to recalculate everytime the componet object change! Which might cause huge performance drop
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): unknown {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
