import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuggestedBeersComponent } from './beer-detail/suggested-beers/suggested-beers.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerSearchComponent,
    BeerDetailComponent,
    NavbarComponent,
    SuggestedBeersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
