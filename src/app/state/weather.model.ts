import { ID } from '@datorama/akita';

export interface Weather {
  id: ID;
}

/**
 * A factory function that creates Weather
 */
export function createWeather(params: Partial<Weather>) {
  return {

  } as Weather;
}
