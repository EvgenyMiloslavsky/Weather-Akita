import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {SearchLocationService} from '../../state/search-location.service';
import {SearchLocationQuery} from '../../state/search-location.query';
import {SearchLocation} from '../../state/search-location.model';


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {
  searchCity = new FormControl();
  errorMsg: string;
  cities$ = this.searchLocationQuery.selectAll();
  filteredData: any[] = [];

  constructor(
    private searchLocationService: SearchLocationService,
    private searchLocationQuery: SearchLocationQuery) {
  }


  ngOnInit() {

    this.searchCity.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.filteredData = [];
        }),
        filter(Boolean),
        tap(() => {
          // this.isLoading = true;
        })
      )
      .subscribe((value: string) => {
        console.log(value);
        this.searchLocationService.searchLocation(value);
      });

    this.cities$.subscribe(value => {
      if (value) {
        for (let key in value[0]) {
          this.filteredData.push(value[0][key]);
        }
      }
    });
    console.log('Filteredvalue: ', this.filteredData);
  }
}

