import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { OpenAhjoService } from './services/open-ahjo.service';
import { ErrorInterface } from './models/errorinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenAhjoService]
})
export class AppComponent {
  title = 'Työpöytä';
  agendaItems = [];
  errorMessage = null;

  constructor(private openAhjoService: OpenAhjoService) { }

  ngOnInit() {
    console.log('AppComponent', 'ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent', 'ngOnChanges()', changes);
  }

  ngOnDestroy() {
    console.log('AppComponent', 'ngOnDestroy()');
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
      this.errorMessage = <ErrorInterface>error;
      this.agendaItems = [];
    });
  }
}
