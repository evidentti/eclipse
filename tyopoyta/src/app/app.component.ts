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
    console.log('get agenda items');
    this.openAhjoService.getAgendaItems().subscribe((items) => {
      if (items instanceof Array) {
        console.log('is array');
        this.agendaItems = items;
      } else {
        console.log('is not array');
      }
      console.log('result', items);
    });
  }

  getAgendaItems2() {
    this.openAhjoService.getAgendaItems2().then((items) => {
      console.log('result', items);
      this.agendaItems = items;
    }).catch((error) => {
      console.error(error);
    });
  }
}
