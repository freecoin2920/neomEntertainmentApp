import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailEvPageRoutingModule } from './place-detail-ev-routing.module';

import { PlaceDetailEvPage } from './place-detail-ev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailEvPageRoutingModule
  ],
  declarations: [PlaceDetailEvPage]
})
export class PlaceDetailEvPageModule {}
