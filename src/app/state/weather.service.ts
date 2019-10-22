import {Injectable} from '@angular/core';
import {WeatherStore, WeatherState} from './weather.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {createWeather, Weather} from './weather.model';
import {guid} from '@datorama/akita';
import {get} from 'https';
import {HttpClient, HttpParams} from '@angular/common/http';
import {url} from 'inspector';
import {environment} from '../../environments/environment';
import {WeatherQuery} from './weather.query';
import {map, switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
@NgEntityServiceConfig(
  {
    resourceName: 'currentconditions/v1/',
    // baseUrl: 'https://dataservice.accuweather.com'
  })

export class WeatherService extends NgEntityService<WeatherState> {

  params: HttpParams = new HttpParams()
    .set('apikey', environment.apiKey)
    //   .set('apikey', 'hjZuRkwFx2UcPWrPg2b6oRK4DoqsUKlG')
    //   .set('apikey', 'HAwqN4nGaPNIPr19Zf0WwxZi7dq2WAsv')
    // .set('q', 'Tel Aviv')
    .set('language', 'en-us')/*
    .set('mapResponseFn?', '(res) => Entity | Entity[]')*/;

  cityKey: string;

  constructor(
    protected weatherStore: WeatherStore,
    private weatherQuery: WeatherQuery
  ) {
    super(weatherStore);
  }

  getCityKey(city: string) {
    this.get(
      '',
      {
        params: this.params.set('q', city), url: 'http://dataservice.accuweather.com/locations/v1/cities/search'
      })
      .subscribe(req => {
        console.log('Request for key: ', req[0].Key);
        this.cityKey = req[0].Key;
        // this.weatherStore.update(null,{cityKey: req[0].Key});
      });
  }


  
  /* getForecast(city: string, cityKey: string) {
     this.get(
       '',
       {params: this.params, url: 'http://dataservice.accuweather.com/currentconditions/v1/' + cityKey})
       .subscribe(value => {
         console.log('>>>>', value);
       });
   }*/

  getForecast(city: string) {
    this.get(
      '',
      {
        params: this.params.set('q', city), url: 'http://dataservice.accuweather.com/locations/v1/cities/search'
      }).pipe(
      map((res: Weather) => {
        console.log('Current Key >>> ', res);
        return res[0].Key;
      }),
      switchMap((value: string) => {
          console.log('SwitchMap Value', value);
          return this.get(
            '',
            {params: this.params, url: 'http://dataservice.accuweather.com/currentconditions/v1/' + value});
        }
      )).subscribe(
      value => {
        console.log('Entity', value);
      }
    );
  }

}
