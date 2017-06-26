import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AgendaItemInterface } from '../models/agendaiteminterface';
import { ErrorInterface } from '../models/errorinterface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const SERVICE_URL = 'https://dev.hel.fi:443/paatokset/v1/';
const AGENDA_ITEMS_URL = SERVICE_URL + 'agenda_item/?limit=500&offset=0';

@Injectable()
export class OpenAhjoService {

  constructor(private http: Http) { }

  getAgendaItems(): Observable<Array<AgendaItemInterface>> {
    return this.http.get(AGENDA_ITEMS_URL)
      .map(response => response.json().objects as Array<AgendaItemInterface>);
  }

  getAgendaItemsPromise(): Promise<Array<AgendaItemInterface>> {
    return this.http.get(AGENDA_ITEMS_URL)
      .toPromise()
      .then(response => response.json().objects as Array<AgendaItemInterface>)
      .catch(error => Promise.reject(error));
  }

}
