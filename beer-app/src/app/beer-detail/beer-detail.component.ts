import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Beer } from '../beer.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: [ './beer-detail.component.scss' ]
})
export class BeerDetailComponent implements OnInit {
  beer: Beer | undefined

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getBeer(id)
      .subscribe(beer => this.beer = beer[0]);
  }

  showSuggestions(): void {
    const yeast = this.beer?.yeast
    // this.apiService.searchBeersByYeast(yeast)
  }

  goBack(): void {
    this.location.back();
  }

}
