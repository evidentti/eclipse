import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const SERVICE_URL = 'https://dev.hel.fi:443/paatokset/v1/';
const AGENDA_ITEMS_URL = SERVICE_URL + 'agenda_item/';

@Injectable()
export class OpenAhjoService {

    constructor(private http: Http) { }

  getAgendaItems(): Observable<Response> {
    return this.http.get(AGENDA_ITEMS_URL)
      .map(this.agendaItemsReady);
  }

  getAgendaItems2(): Promise<Array<any>> {
    return this.http.get(AGENDA_ITEMS_URL)
      .toPromise()
      .then(response => response.json().objects as Array<any>)
      .catch(this.handleError);
  }

  private agendaItemsReady(res: Response) {
    const body = res.json();
    return body.objects || [];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
