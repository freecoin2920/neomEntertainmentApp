import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'place-detail-acc',
    loadChildren: () => import('./accomodation/place-detail-acc/place-detail-acc.module').then( m => m.PlaceDetailAccPageModule)
  },
  {
    path: 'place-detail-act',
    loadChildren: () => import('./activities/place-detail-act/place-detail-act.module').then( m => m.PlaceDetailActPageModule)
  },
  {
    path: 'place-detail-rest',
    loadChildren: () => import('./restaurants/place-detail-rest/place-detail-rest.module').then( m => m.PlaceDetailRestPageModule)
  },
  {
    path: 'place-detail-ev',
    loadChildren: () => import('./events/place-detail-ev/place-detail-ev.module').then( m => m.PlaceDetailEvPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'accomodation',
    loadChildren: () => import('./accomodation/accomodation.module').then( m => m.AccomodationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
