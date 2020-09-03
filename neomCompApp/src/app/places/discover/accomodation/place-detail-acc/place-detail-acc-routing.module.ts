import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailAccPage } from './place-detail-acc.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailAccPageRoutingModule {}
