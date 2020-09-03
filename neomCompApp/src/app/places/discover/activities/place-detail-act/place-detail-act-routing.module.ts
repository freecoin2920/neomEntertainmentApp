import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailActPage } from './place-detail-act.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailActPageRoutingModule {}
