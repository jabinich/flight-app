import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  basket: { [key: number]: boolean} = {
    3: true,
    5: true
  };
  date: string =(new Date()).toISOString();

  constructor(private http: HttpClient) {
    console.debug("date in father constructor", this.date)
   }

  ngOnInit(): void {
    console.debug("date in father ngOnInit", this.date);
  }

  search(): void {
    const url = 'http://demo.angulararchitects.io/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    
    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http.get<Flight[]>(url, {headers, params}).subscribe({
      next: (flights) =>{
        this.flights = flights;
      },
      error: (err) =>{
        console.error('Error', err);
      }
    });
  }

/*   select(f: Flight): void {
    this.selectedFlight = f;
  } */

}
