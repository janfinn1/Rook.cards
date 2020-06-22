import { Card } from '../card/card';

export class Player {
  name: string;
  id: PlayerId;

  constructor(id: PlayerId){
    this.id = id;
  }
}

export type PlayerId = 1|2|3|4;
