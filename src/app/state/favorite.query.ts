import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FavoriteStore, FavoriteState } from './favorite.store';

@Injectable({ providedIn: 'root' })
export class FavoriteQuery extends QueryEntity<FavoriteState> {

  constructor(protected store: FavoriteStore) {
    super(store);
  }

}
