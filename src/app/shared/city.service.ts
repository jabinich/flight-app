import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  formatName(value: string, format: 'long' | 'short'): string {
    let short;
    let long;

    switch(value){
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Helmut Schmidt';
        break;
      default:
        short = long = value;
    }

    if (format === 'long'){
      return long;
    }

    return short;
  }
}
