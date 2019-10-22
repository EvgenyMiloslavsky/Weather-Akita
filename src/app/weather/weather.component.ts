import {Component, OnInit} from '@angular/core';
import {WeatherState, WeatherStore} from '../state/weather.store';
import {WeatherQuery} from '../state/weather.query';
import {Weather} from '../state/weather.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currenetCity$: Observable<Weather>;
  currentCity: string;

  constructor(private weatherStore: WeatherStore,
              private weatherQuery: WeatherQuery) {
  }

  ngOnInit() {
    console.log('>>>>', this.weatherQuery.selectAll());
  }
}
