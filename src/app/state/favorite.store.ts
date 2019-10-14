import { Injectable } from '@angular/core';
import { Favorite } from './favorite.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface FavoriteState extends EntityState<Favorite> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'favorite' })
export class FavoriteStore extends EntityStore<FavoriteState> {

  constructor() {
    super();
  }

}

