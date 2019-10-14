import { Injectable } from '@angular/core';
import { WeatherStore, WeatherState } from './weather.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class WeatherService extends NgEntityService<WeatherState> {

  constructor(protected store: WeatherStore) {
    super(store);
  }
  searchLocation(city: string){

  }
}
