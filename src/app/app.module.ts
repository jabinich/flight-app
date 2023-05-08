import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusFilterPipe } from './status-filter.pipe';

@NgModule({
   imports: [
      FormsModule,
      HttpClientModule,
      BrowserModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      FlightCardComponent,
      DateComponent,
      CityPipe,
      StatusFilterPipe
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
