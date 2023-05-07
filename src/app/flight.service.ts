import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root', //der Scope des Service
  //useClass: DefaultFlightService
  useClass: DummyFlightService
})

//Klasse als abstrakt kennzeichnen
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
