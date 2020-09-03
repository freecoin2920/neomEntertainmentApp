import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesPageRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {
  //constructor(
    //public id: string,
    //public title: string, 
    //public description:string, 
    //public imageUrl: string, 
    //public price: number) {}
}
