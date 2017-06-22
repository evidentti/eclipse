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

  constructor(private openAhjoService: OpenAhjoService) { }

  getAgendaItems() {
    this.agendaItems = [];
    this.openAhjoService.getAgendaItems().subscribe((items) => {
      this.agendaItems = (items instanceof Array) ? items : [];
    });
  }

  getAgendaItems2() {
    this.agendaItems = [];
    this.openAhjoService.getAgendaItems2().then((items) => {
      this.agendaItems = items;
    }).catch((error) => {
      console.error(error);
    });
  }
}
