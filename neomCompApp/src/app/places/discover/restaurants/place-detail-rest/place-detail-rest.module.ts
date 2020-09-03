import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailRestPageRoutingModule } from './place-detail-rest-routing.module';

import { PlaceDetailRestPage } from './place-detail-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailRestPageRoutingModule
  ],
  declarations: [PlaceDetailRestPage]
})
export class PlaceDetailRestPageModule {}
