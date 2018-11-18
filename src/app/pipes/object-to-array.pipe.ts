import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectToArray'})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any): Array<any> {
    let array: Array<any> = [];
    array = Object.keys(value).map(function(arrayIndex) {
        const object = value[arrayIndex];

      return object;
    });
    return array;
  }
}
@Pipe({name: 'objectToArrayWithKeys'})
export class ObjectToArrayWithKeysPipe implements PipeTransform {
  transform(value: any): Array<any> {
      const result = [];

    Object.keys(value).map((key) => {
        const group = {name: key, obj: value[key]};

        result.push(group);
    });

    return result;
  }
}
