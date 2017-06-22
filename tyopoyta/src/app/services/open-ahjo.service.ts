import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AgendaItemInterface } from '../models/agendaiteminterface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const SERVICE_URL = 'https://dev.hel.fi:443/paatokset/v1/';
const AGENDA_ITEMS_URL = SERVICE_URL + 'agenda_item/?limit=500&offset=0';

@Injectable()
export class OpenAhjoService {

  constructor(private http: Http) { }

  getAgendaItems(): Observable<AgendaItemInterface[]> {
    console.log('OpenAhjoService', 'getAgendaItems()');
    return this.http.get(AGENDA_ITEMS_URL)
      .map(this.agendaItemsReady)
      .catch(this.handleError);
  }

  getAgendaItems2(): Promise<Response> {
    console.log('OpenAhjoService', 'getAgendaItems2()');
    return this.http.get(AGENDA_ITEMS_URL)
      .toPromise()
      .then(response => response.json().objects as Response)
      .catch(this.handleError);
  }

  private agendaItemsReady(res: Response) {
    const body = res.json();
    return body.objects || [];
  }

  private agendaItemsReady2(res: Array<AgendaItemInterface>) {
    return res;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
