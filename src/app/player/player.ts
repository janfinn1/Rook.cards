export class Player {
  name: string;
  id: PlayerId;

  constructor(id: PlayerId, name?: string){
    this.id = id;
    this.name = name;
  }
}

export type PlayerId = 1|2|3|4;
