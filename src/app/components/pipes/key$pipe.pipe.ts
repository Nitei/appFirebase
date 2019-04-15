import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key$'
})
export class Key$pipePipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for (const key in value) {
      // if (value.hasOwnProperty(key)) {
        const element = value[key];
        keys.push(key)
      // }
    }
    return keys
  }

}
