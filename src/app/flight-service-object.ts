import { of } from 'rxjs';
//ein dummy-Objekt als Ersatz für den FlightService
export const flightServiceObject = {
    find: (from: string, to: string) => {
        console.debug('find', from, to);
        return of([
            { id: 1, from, to, date: new Date().toISOString() }
        ]);
    }
};