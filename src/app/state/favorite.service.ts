import { Injectable } from '@angular/core';
import { FavoriteStore, FavoriteState } from './favorite.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class FavoriteService extends NgEntityService<FavoriteState> {

  constructor(protected store: FavoriteStore) {
    super(store);
  }

}
