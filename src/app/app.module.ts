import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from './shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityServiceGlobalConfig} from '@datorama/akita-ng-entity-service';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {WeatherComponent} from './weather/weather.component';
import {SearchLocationComponent} from './weather/search-location/search-location.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherDetailsComponent} from './weather/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WeatherComponent,
    SearchLocationComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://dataservice.accuweather.com'}}],
  /*providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useFactory: function() {
        return {
          baseUrl: 'https://dataservice.accuweather.com',
          httpMethods: {
            PUT: HttpMethod.PATCH
          }
        } as NgEntityServiceGlobalConfig;
      },
      deps: []
    }
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule {
}
