import {Injectable} from '@angular/core';
import {Weather} from './weather.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface WeatherState extends EntityState<Weather> {
  currentCity: {
    city: string,
    keyCity: string
  };
}

const initialState = {
  currentCity: {
    city: 'Tel Aviv',
    keyCity: '215854'
  }
};

@Injectable({providedIn: 'root'})

@StoreConfig({name: 'weather'})
export class WeatherStore extends EntityStore<WeatherState, Weather> {

  constructor() {
    super(initialState);
  }
}

