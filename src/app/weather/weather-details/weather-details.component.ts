import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WeatherState, WeatherStore} from '../../state/weather.store';
import {WeatherQuery} from '../../state/weather.query';
import {WeatherService} from '../../state/weather.service';
import {Weather} from '../../state/weather.model';
import {NgEntityServiceLoader} from '@datorama/akita-ng-entity-service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent implements OnInit, OnDestroy {
@Input() currentCity;

  currentCity$ = this.weatherQuery.select('currentCity');
  currentForecast$ = this.weatherQuery.selectAll();
  loaders = this.loader.loadersFor('weather-details');

  city: string;

  cityKey: string;
  forecast: Weather;
  currentSub: Subscription;
  forecastSub: Subscription;


  constructor(
    private weatherQuery: WeatherQuery,
    private weatherService: WeatherService,
    private loader: NgEntityServiceLoader
  ) {
  }

  ngOnInit() {
    // this.weatherService.getForecast(this.city, this.cityKey);

    this.currentSub = this.currentCity$.subscribe(value => {
        this.city = value.city;
        this.weatherService.getForecast(this.city);
        console.log('Loaders: ', this.loaders.get$);
      }
    );

    this.forecastSub = this.currentForecast$.subscribe(
      forecast => this.forecast = forecast[0]
    );


    /*
        this.currentWeather$.subscribe((value) => {
          console.log('<<>>', value);
          this.city = value.city;
          this.cityKey$.subscribe(
            value1 => {
              this.cityKey = value.keyCity;
            });
          console.log('Current City: ', value.city, this.cityKey);
          this.weatherService.getForecast(this.city, this.cityKey);
          this.weatherService.getCityKey(this.city);
        });
    */
  }

  ngOnDestroy(): void {
    this.currentSub.unsubscribe();
    this.forecastSub.unsubscribe();
  }
}
