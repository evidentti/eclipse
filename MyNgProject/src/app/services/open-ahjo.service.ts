import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

const SERVICE_URL = 'https://dev.hel.fi:443/paatokset/v1/';
const AGENDA_ITEMS_URL = SERVICE_URL + 'agenda_item/';

@Injectable()
export class OpenAhjoService {

  constructor(private http: Http) { }

  getAgendaItems(): Observable<Response> {
    return this.http.get(AGENDA_ITEMS_URL)
      .map(this.agendaItemsReady);
  }

  private agendaItemsReady(res: Response) {
    const body = res.json();
    return body.objects || [];
  }

}
