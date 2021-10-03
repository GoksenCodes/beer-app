import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from 'src/app/beer.model';

@Component({
  selector: 'app-suggested-beers',
  templateUrl: './suggested-beers.component.html',
  styleUrls: ['./suggested-beers.component.scss']
})
export class SuggestedBeersComponent implements OnInit {
  @Input() suggestedBeers: Beer []

  constructor(
  ) {
    this.suggestedBeers = [];
   }

  ngOnInit(): void {
  }

}
