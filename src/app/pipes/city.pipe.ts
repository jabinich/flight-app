import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { CityService } from '../city.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform, OnDestroy {

  constructor(private cityService: CityService){

  }

  //Aufräumarbeiten mit ngOnDestroy
  ngOnDestroy(): void {
    console.debug('Ich nehme den Hut und sage Adieu!');
  }

  transform(value: string | undefined, format: 'long' | 'short'): string | undefined {
    if (typeof value === 'undefined'){
      return value;
    }

    return this.cityService.formatName(value, format);
  }

}
