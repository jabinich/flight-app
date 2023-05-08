import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { flightServiceObject } from './flight-service-object';
import { createFlightService } from './flight-service-actory';
import { Flight } from './flight';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', //der Scope des Service
  //useClass: DefaultFlightService
  //useClass: DummyFlightService
  //useValue: flightServiceObject
  useFactory: createFlightService,
  deps: [HttpClient]
})

//Klasse als abstrakt kennzeichnen
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
