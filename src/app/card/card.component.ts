import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() number: string;
  @Input() showBack?: boolean;

  @HostBinding('class') class: ClassController;

  constructor() { }

  ngOnInit() {
    var classes: ClassController = {};

    classes[this.color] = true;
    classes[this.showBack ? 'showBack' : 'showFront'] = true;

    this.class = classes;
  }

}

type ClassController = {[className: string]: boolean};
