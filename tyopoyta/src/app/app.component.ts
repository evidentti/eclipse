import { Component } from '@angular/core';
import { OpenAhjoService } from './services/open-ahjo.service';

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

  getAgendaItems() {
    this.agendaItems = [];

    this.openAhjoService.getAgendaItems().subscribe(
      items => this.agendaItems = items,
      error => this.errorMessage = <any>error
    );
  }

  getAgendaItems2() {
    this.agendaItems = [];
    this.openAhjoService.getAgendaItems2().then((items) => {
      this.agendaItems = items;
      console.log('AGENDA ITEMS', this.agendaItems);
    }).catch((error) => {
      console.error(error);
    });
  }
}
