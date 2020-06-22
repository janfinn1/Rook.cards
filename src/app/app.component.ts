import { Component, VERSION } from '@angular/core';

import { Card } from './card/card';
import { shuffle } from './helpers/snippets';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public cards: Card[];


  ngOnInit() {
    this.cards = [];

    for(let color of ['red', 'yellow', 'green', 'black']){
      this.cards.push(new Card("1", color));

      for(let i=5;i<=14;i++)
        this.cards.push(new Card("" + i, color));
    }

    this.cards.push(new Card("R"));

    shuffle(this.cards);

    console.log(this.cards.length);
  }
}
