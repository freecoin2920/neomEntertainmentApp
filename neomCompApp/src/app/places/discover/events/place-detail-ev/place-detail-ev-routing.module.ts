import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailEvPage } from './place-detail-ev.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailEvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailEvPageRoutingModule {}
