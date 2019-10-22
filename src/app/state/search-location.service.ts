import {Injectable} from '@angular/core';
import {SearchLocationStore, SearchLocationState} from './search-location.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {HttpParams} from '@angular/common/http';
import {SearchLocation} from './search-location.model';
import {WeatherStore} from './weather.store';
import {WeatherQuery} from './weather.query';
import {SearchLocationQuery} from './search-location.query';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
@NgEntityServiceConfig(
  {
    // baseUrl: 'https://dataservice.accuweather.com',
    resourceName: 'locations/v1/cities/autocomplete?'
  })

export class SearchLocationService extends NgEntityService<SearchLocationState> {

  params: HttpParams = new HttpParams()
    .set('apikey', environment.apiKey)
    //   .set('apikey', 'hjZuRkwFx2UcPWrPg2b6oRK4DoqsUKlG')
    //   .set('apikey', 'HAwqN4nGaPNIPr19Zf0WwxZi7dq2WAsv')
    // .set('q', 'Tel Aviv')
    .set('language', 'en-us')/*
    .set('mapResponseFn?', '(res) => Entity | Entity[]')*/;


  // .set('details', 'false')

  constructor(
    protected searchLocationStore: SearchLocationStore,
    private weatherStore: WeatherStore,
    private searchLocationQuery: SearchLocationQuery
  ) {
    super(searchLocationStore);
  }

  searchLocation(city: string) {
    this.get('', {params: this.params.set('q', city)}/*{url: 'asset/JSON/autocomplete.json'}*/).subscribe(
      (res: SearchLocation[]) => {
        if (!res.length) {
          this.searchLocationStore.setError('Wrong City Name');
        } else {
          this.searchLocationStore.setError('');
          // this.weatherStore.update()
        }
      });
  }

  clearLocation() {
    this.store.remove();
  }

  setCurrentCity(city: any) {
    const keyCity = this.searchLocationQuery.selectEntity(0, entity => entity.LocalizedName);
    keyCity.subscribe(
      entity =>
        console.log('Set City', entity));

  }
}
