import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {SearchLocationService} from '../../state/search-location.service';
import {SearchLocationQuery} from '../../state/search-location.query';
import {SearchLocation} from '../../state/search-location.model';
import {NgEntityServiceLoader} from '@datorama/akita-ng-entity-service';
import {error} from 'util';
import {WeatherService} from '../../state/weather.service';


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})

export class SearchLocationComponent implements OnInit {
  @Output() currentCity = new EventEmitter();

  cities$ = this.searchLocationQuery.selectAll();

  searchCity = new FormControl();
  cities: any[] = [];
  loaders = this.loader.loadersFor('search-location');
  errorMsg$ = this.searchLocationQuery.selectError();
  errorMsg = '';
  searchValue: string;


  constructor(
    private searchLocationService: SearchLocationService,
    private searchLocationQuery: SearchLocationQuery,
    private loader: NgEntityServiceLoader
  ) {
  }


  ngOnInit() {

    this.searchCity.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.cities = [];
        }),
        filter(Boolean),
        tap(() => {
          // this.isLoading = true;
        })
      )
      .subscribe((value: string) => {
        this.searchLocationService.searchLocation(value);
      });

    this.errorMsg$.subscribe((e) => {
      this.errorMsg = e;
    });

    this.cities$.subscribe(value => {
      if (value) {
        for (let key in value[0]) {
          this.cities.push(value[0][key].LocalizedName);
        }
      }
    });
  }

  onSelectCity() {
    // this.currentCity.emit();
    if (this.cities.includes(this.searchCity.value)) {
      this.searchLocationService.setCurrentCity(this.searchCity.value);
    }
    // this.searchCity.reset(this.searchCity);
    // this.searchLocationService.clearLocation();
  }
}

