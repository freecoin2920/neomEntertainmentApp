import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailRestPage } from './place-detail-rest.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailRestPageRoutingModule {}
