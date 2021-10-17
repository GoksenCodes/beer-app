import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, switchMap
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
  event$!: MouseEvent

  private searchTerms = new Subject<string>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.beers$ = this.searchTerms.pipe(
      debounceTime(500),
      switchMap((name: string) => this.apiService.searchBeersByName(name)),
    );
    this.getBeersWithQueryParams();
  }

  search(term: string): void {
    this.searchTerms.next(term);
    const queryParams: Params = { term };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
  }

  getBeersWithQueryParams(): void {
    this.route.queryParams.subscribe(params => console.log(params));
  }
}


