import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { OpenAhjoService } from './services/open-ahjo.service';
import { AgendaItemInterface } from './models/agendaiteminterface';
import { ErrorInterface } from './models/errorinterface';
import { BaseComponent } from './base/base.component';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenAhjoService]
})
export class AppComponent extends BaseComponent {
  private title = 'Työpöytä';
  private agendaItems: Array<AgendaItemInterface> = [];
  private errorMessage: string = null;

  constructor(private openAhjoService: OpenAhjoService) {
    super();
    this.componentName = 'AppComponent';
  }

  getAgendaItems() {
    this.agendaItems = null;
    this.errorMessage = null;

    this.openAhjoService.getAgendaItems().subscribe(
      items => this.agendaItems = <AgendaItemInterface[]>items,
      error => {
        this.errorMessage = (<ErrorInterface>error)._body;
        this.agendaItems = [];
      },
      () => {
        console.log('READY');
      }
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
