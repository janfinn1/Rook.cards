import { Component, VERSION } from '@angular/core';

import { Card } from './card/card';
import { SnippetService } from './helpers/snippet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public game: Game;

  constructor() {}

  ngOnInit() {
    this.game = new Game();
    this.game.setup();
  }
}
