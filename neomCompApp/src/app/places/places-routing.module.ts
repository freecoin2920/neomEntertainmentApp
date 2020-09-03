import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {path: 'armap', children:[
        {
          path:'',
          loadChildren: () => import('./armap/armap.module').then( m => m.ArmapPageModule) 
        }
      ]},
      {path: 'discover', children:[
        {
          path:'',
          loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule) 
        },
        {
          path: 'events',
          loadChildren: () => import('./discover/events/events.module').then( m => m.EventsPageModule)
        },
        {
          path: 'restaurants',
          loadChildren: () => import('./discover/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
        },
        {
          path: 'activities',
          loadChildren: () => import('./discover/activities/activities.module').then( m => m.ActivitiesPageModule)
        },
        {
          path: 'accomodation',
          loadChildren: () => import('./discover/accomodation/accomodation.module').then( m => m.AccomodationPageModule)
        },
        {
          path: ':placeIDacc',
          loadChildren: () => import('./discover/accomodation/place-detail-acc/place-detail-acc.module').then( m => m.PlaceDetailAccPageModule)
        },
        {
          path: ':placeIDact',
          loadChildren: () => import('./discover/activities/place-detail-act/place-detail-act.module').then( m => m.PlaceDetailActPageModule)
        },
        {
          path: ':placeIDrest',
          loadChildren: () => import('./discover/restaurants/place-detail-rest/place-detail-rest.module').then( m => m.PlaceDetailRestPageModule)
        },
        {
          path: ':placeIDev',
          loadChildren: () => import('./discover/events/place-detail-ev/place-detail-ev.module').then( m => m.PlaceDetailEvPageModule)
        }
      ]},
      {
        path: 'mylist', children:[
          {
            path:'',
            loadChildren: () => import('./mylist/mylist.module').then( m => m.MylistPageModule) 
          }
        ]},
        {
          path: '',
          redirectTo: '/places/tabs/discover',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
