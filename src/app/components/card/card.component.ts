import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  moduleId: module.id,
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() link: string;
  @Input() linkText: string;

  constructor() { }

  ngOnInit() {
  }

}
