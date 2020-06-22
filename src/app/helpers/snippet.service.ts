import { Injectable } from '@angular/core';

@Injectable()
export class SnippetService {

  constructor() { }

  shuffle(array) {
    // https://javascript.info/task/shuffle
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}