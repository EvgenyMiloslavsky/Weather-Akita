import {Injectable} from '@angular/core';
import {SearchLocation} from './search-location.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface SearchLocationState extends EntityState<SearchLocation> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'search-location',
/*
  cache: {
    ttl: 3600000
  }
*/
})
export class SearchLocationStore extends EntityStore<SearchLocationState> {

  constructor() {
    super();
  }

}

