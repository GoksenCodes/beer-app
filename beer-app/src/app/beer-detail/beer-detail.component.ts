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
  previousUrl: string = '';
  isSuggestionsEnabled = false;
  randomBeerImage = 'https://502brews.files.wordpress.com/2013/05/draft-beer-small.jpg'

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router,
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getBeer(id)
      .subscribe(beer => this.beer = beer[0]);
  }


  showSuggestions(): void {
    this.isSuggestionsEnabled = true;
    const yeast = this.beer?.ingredients.yeast
    this.apiService.searchBeersByYeast(yeast)
      .subscribe(suggestedBeers =>
      this.suggestedBeers = suggestedBeers.slice(0, 3)
    )
  }

  goBackToSearchResults(): void {
    this.location.back();
  }

}

