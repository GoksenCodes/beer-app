import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from 'src/app/beer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggested-beers',
  templateUrl: './suggested-beers.component.html',
  styleUrls: ['./suggested-beers.component.scss']
})
export class SuggestedBeersComponent implements OnInit {
  @Input() suggestedBeers: Beer []
  @Output() clicked = new EventEmitter();
  callParent(){
    this.clicked.emit()
 }

  constructor(
    private router: Router
  ) {
    this.suggestedBeers = [];
   }

  ngOnInit(): void {
    console.log(this.suggestedBeers)
  }

}
