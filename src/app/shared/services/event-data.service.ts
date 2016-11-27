import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { IEvent } from '../models/event.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventDataService {
    
    eventsEndpointUrl = 'http://www.mocky.io/v2/583ab93210000038057640ad'
    result: string;

    constructor(private _http: Http) { };
     
    getEventsFromServer(): Observable<IEvent[]> {
        console.log('attempting to retrieve events from server');
        let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', '*');
        var resp =  this._http.get(this.eventsEndpointUrl, { headers: headers})
            .map(response => response.json());
        console.log(JSON.stringify(resp));
            return resp;
    }

    private handleError(error: Response ) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
