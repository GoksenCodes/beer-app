import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { ApiService } from '../api.service';

import { Beer } from '../beer.model';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: [ './beer-search.component.scss' ]
})
export class BeerSearchComponent implements OnInit {
  beers$!: Observable<Beer[]>;

  private searchTerms = new Subject<string>();

  constructor(private apiService: ApiService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.beers$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((name: string) => this.apiService.searchBeersByName(name)),
    );
  }
}
