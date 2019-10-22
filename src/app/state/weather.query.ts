import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WeatherStore, WeatherState} from './weather.store';
import {Weather} from './weather.model';

@Injectable({providedIn: 'root'})
export class WeatherQuery extends QueryEntity<WeatherState, Weather> {

  currentCity: string;
  constructor(protected store: WeatherStore) {
    super(store);
  }

}
