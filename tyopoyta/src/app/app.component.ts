import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { OpenAhjoService } from './services/open-ahjo.service';
import { ErrorInterface } from './models/errorinterface';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenAhjoService]
})
export class AppComponent extends BaseComponent {
  title = 'Työpöytä';
  agendaItems = [];
  errorMessage = null;

  constructor(private openAhjoService: OpenAhjoService) {
    super();
    this.componentName = 'AppComponent';
  }

  getAgendaItems() {
    this.agendaItems = null;
    this.errorMessage = null;

    this.openAhjoService.getAgendaItems().subscribe(
      items => this.agendaItems = items,
      error => this.errorMessage = <ErrorInterface>error
    );
  }

  getAgendaItemsPromise() {
    this.agendaItems = null;
    this.errorMessage = null;
    this.openAhjoService.getAgendaItemsPromise().then((items) => {
      this.agendaItems = items || [];
    }).catch((error) => {
      this.errorMessage = (<ErrorInterface>error)._body;
      this.agendaItems = [];
    });
  }
}
