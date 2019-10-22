import { ID } from '@datorama/akita';

export interface SearchLocation {
  id: ID;
  error: string;
  LocalizedName: string;
}

/**
 * A factory function that creates SearchLocation
 */
export function createSearchLocation(params: Partial<SearchLocation>) {
  return {

  } as SearchLocation;
}
