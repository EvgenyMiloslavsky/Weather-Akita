import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchLocationStore, SearchLocationState } from './search-location.store';

@Injectable({ providedIn: 'root' })
export class SearchLocationQuery extends QueryEntity<SearchLocationState> {

  constructor(protected store: SearchLocationStore) {
    super(store);
  }

}
