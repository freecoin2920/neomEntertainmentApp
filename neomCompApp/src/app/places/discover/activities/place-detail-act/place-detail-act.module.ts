import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailActPageRoutingModule } from './place-detail-act-routing.module';

import { PlaceDetailActPage } from './place-detail-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailActPageRoutingModule
  ],
  declarations: [PlaceDetailActPage]
})
export class PlaceDetailActPageModule {}
