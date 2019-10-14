import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {FavoriteItemComponent} from './favorites-item/favorites-item.component';
import {SharedModule} from '../shared.module';
import {WeatherComponent} from '../weather/weather.component';
import {FavoritesComponent} from './favorites.component';

export const ROUTES: Routes = [
  {path: '', component: FavoritesComponent}];

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FavoritesModule {
}
