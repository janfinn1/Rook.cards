export class Card {
  color?: string;
  number: string;

  initialLocation: CardLocation; // Kept so that we can analyze the game afterwards
  location: CardLocation; // Current


  constructor(number: string, color?: string) {
    this.number = number;
    this.color = color;
  }

  getPoints(): number {
    switch(this.number){
      case "1":
        return 15;
      case "14":
      case "10":
        return 10;
      case "5":
        return 5;
      case "R":
        return 20;
    }
  }
}

export enum CardLocation {
  nest = 0, // the five cards dealt into the middle
  player1hand, // in the hand of player1 ...
  player2hand,
  player3hand,
  player4hand,
  player5hand,

  table, // the card is currently on the table

  kitty, // the five cards lain down by whomever takes the bid
  player1pile, // in the discard pile of player1 ...
  player2pile,
  player3pile,
  player4pile,
  player5pile
}
