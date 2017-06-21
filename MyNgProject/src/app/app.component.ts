import { Component } from '@angular/core';
import { RandomWordService } from './services/random-word.service';
import { OpenAhjoService } from './services/open-ahjo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomWordService, OpenAhjoService],
})
export class AppComponent {
  title = 'Random Words!';
  randomWords = [];
  agendaItems = [];

  constructor(private randomWordsService: RandomWordService, private openAhjoService: OpenAhjoService) { }

  getNewRandomWord() {
    console.log('get new random word');
    this.randomWordsService.getNew().subscribe((word) => {
      this.randomWords.push(word);
    });
  }

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
}
