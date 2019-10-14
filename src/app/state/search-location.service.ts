import {Injectable} from '@angular/core';
import {SearchLocationStore, SearchLocationState} from './search-location.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
@NgEntityServiceConfig(
  {
    // baseUrl: 'https://dataservice.accuweather.com',
    resourceName: 'locations/v1/cities/autocomplete?'
  })

export class SearchLocationService extends NgEntityService<SearchLocationState> {

  params: HttpParams = new HttpParams()
    .set('apikey', 'sAgn99HkP6R3c9j5UxZc1TNwIt7zNCX8')
    // .set('apikey', 'hjZuRkwFx2UcPWrPg2b6oRK4DoqsUKlG')
    // .set('apikey', 'HAwqN4nGaPNIPr19Zf0WwxZi7dq2WAsv')
    // .set('q', 'Tel Aviv')
    .set('language', 'en-us')/*
    .set('mapResponseFn?', '(res) => Entity | Entity[]')*/;


  // .set('details', 'false')

  constructor(protected store: SearchLocationStore) {
    super(store);
  }

  searchLocation(city: string) {
    // return this.get('', {params: this.params.set('q', city)});
    this.get('', {params: this.params.set('q', city)}).subscribe(res => console.log(res));
  }

}
