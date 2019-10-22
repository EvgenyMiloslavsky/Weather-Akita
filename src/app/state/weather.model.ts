import {ID} from '@datorama/akita';

export type Weather = {
  city: string;
  cityKey: string;
};

/**
 * A factory function that creates Weather
 */
export function createWeather({city, cityKey}: Partial<Weather>) {
  return {
    city,
    cityKey,
  } as Weather;
}
