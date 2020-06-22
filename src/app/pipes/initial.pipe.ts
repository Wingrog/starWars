import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const arrayName = value.split(' '); //on va séparer à l'espace 'Jonathan Lopez' Cela fera donc un tableau qui contiendra en index 0 "Jonathan" et en index 1 "Lopez"
    return arrayName[0][0] + arrayName[1][0]; //on va prendre au premier mot la première lettre et ensuite sur le second mot on va prendre sa premiere lettre. JL
  }

}
