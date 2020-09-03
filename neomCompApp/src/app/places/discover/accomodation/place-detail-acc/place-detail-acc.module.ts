import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailAccPageRoutingModule } from './place-detail-acc-routing.module';

import { PlaceDetailAccPage } from './place-detail-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailAccPageRoutingModule
  ],
  declarations: [PlaceDetailAccPage]
})
export class PlaceDetailAccPageModule {}
