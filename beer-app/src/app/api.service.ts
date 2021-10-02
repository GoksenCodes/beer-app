import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Beer } from './beer.model';



@Injectable({ providedIn: 'root' })

export class ApiService {

  private punkUrl = 'https://api.punkapi.com/v2/beers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

  getBeer(id:number): Observable<Beer[]> {
    const url = `${this.punkUrl}/${id}`;
    return this.http.get<Beer[]>(url)
      .pipe(
        catchError(this.handleError<Beer[]>(`getBeer id=${id}`))
      );
  }

  searchBeersByName(name: string): Observable<Beer[]> {
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get<Beer[]>(`${this.punkUrl}/?beer_name=${name}`).pipe(
      catchError(this.handleError<Beer[]>('searchBeersByName', []))
    );
  }

  searchBeersByYeast(yeast: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.punkUrl}/?yeast=${yeast}`).pipe(
      map(beers => beers.slice(0,3),
      catchError(this.handleError<Beer[]>('searchBeersByName', [])))
    );
  }

  searchBeersByAbvLt(maxAbv: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.punkUrl}/?abv_lt=${maxAbv}`).pipe(
      catchError(this.handleError<Beer[]>('searchBeersByName', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);

      return of(result as T);
    };
  }
}
