import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WeatherStore, WeatherState } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends QueryEntity<WeatherState> {

  constructor(protected store: WeatherStore) {
    super(store);
  }



}
