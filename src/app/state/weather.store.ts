import { Injectable } from '@angular/core';
import { Weather } from './weather.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface WeatherState extends EntityState<Weather> {}

@Injectable({ providedIn: 'root' })

@StoreConfig({ name: 'weather' })
export class WeatherStore extends EntityStore<WeatherState> {

  constructor() {
    super();
  }

}

