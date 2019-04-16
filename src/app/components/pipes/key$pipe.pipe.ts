import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key$',
  pure: false // with this, the pipe will check the lifecycle of components of Angular
})
export class Key$pipePipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys
  }

}
