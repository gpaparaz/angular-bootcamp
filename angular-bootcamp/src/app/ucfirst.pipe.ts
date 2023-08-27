import { Pipe, PipeTransform } from '@angular/core';
// una pipe è una classe che implementa il metodo Transform. nel decoratore do il nome della pipe
@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string {
    //the quick brown fox
    //[the, quick, brown, fox] ==> The Quick Brown Fox
    return value.split(' ').map((word:string) => ' ' + word.substring(0, 1).toUpperCase() + ' ' + word.substring(1)).join('');
  }

}
