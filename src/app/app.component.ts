import { Component, VERSION } from '@angular/core';

import { Card } from './card/card';
import { SnippetService } from './helpers/snippet.service';
import { Game } from './game/game';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public game: Game;

  constructor(private snippetService: SnippetService) {}

  ngOnInit() {
    this.game = new Game(this.snippetService);
    this.game.setup();
  }
}
