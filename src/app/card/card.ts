export class Card {
  color?: string;
  number: string;

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
