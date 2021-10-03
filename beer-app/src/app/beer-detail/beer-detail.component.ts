import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../beer.model';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: [ './beer-detail.component.scss' ]
})
export class BeerDetailComponent implements OnInit {
  beer: Beer | undefined
  suggestedBeers: Beer [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    router: Router
  ) {
    this.suggestedBeers = [];
    router.events.subscribe(val => {
      if (location.path() != "") {
          this.getBeer()
      }
    });
  }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getBeer(id)
      .subscribe(beer => this.beer = beer[0]);
  }

  showSuggestions(): void {
    const yeast = this.beer?.ingredients.yeast
    this.apiService.searchBeersByYeast(yeast)
      .subscribe(suggestedBeers =>
      this.suggestedBeers = suggestedBeers.slice(0, 3)
    )
  }

  goBack(): void {
    this.location.back();
  }

}
