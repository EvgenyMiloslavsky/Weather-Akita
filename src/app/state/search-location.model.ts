import { ID } from '@datorama/akita';

export interface SearchLocation {
  id: ID;
}

/**
 * A factory function that creates SearchLocation
 */
export function createSearchLocation(params: Partial<SearchLocation>) {
  return {

  } as SearchLocation;
}
