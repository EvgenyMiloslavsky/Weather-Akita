import { ID } from '@datorama/akita';

export interface Favorite {
  id: ID;
}

/**
 * A factory function that creates Favorite
 */
export function createFavorite(params: Partial<Favorite>) {
  return {

  } as Favorite;
}
