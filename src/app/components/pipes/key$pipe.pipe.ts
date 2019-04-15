import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key$',
  pure: false // with this, the pipe will check the lifecycle of components of Angular
})
export class Key$pipePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    let keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    console.log(keys);
    return keys
  }

}
