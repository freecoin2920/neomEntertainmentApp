import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmapPage } from './armap.page';

const routes: Routes = [
  {
    path: '',
    component: ArmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmapPageRoutingModule {}
