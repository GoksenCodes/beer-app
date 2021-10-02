import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: BeerSearchComponent },
  { path: 'detail/:id', component: BeerDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
