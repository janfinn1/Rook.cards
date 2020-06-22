import { Component, OnChanges, Input, HostBinding, HostListener } from '@angular/core';

import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() card: Card;

  @HostBinding('class') class: string;

  public showBack = false;
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    this.showBack = !this.showBack;
  }

  constructor() { }

  ngOnChanges() {
    this.class = this.card.color;
  }
}

type ClassController = {[className: string]: boolean};
