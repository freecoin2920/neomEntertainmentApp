import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmapPageRoutingModule } from './armap-routing.module';

import { ArmapPage } from './armap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmapPageRoutingModule
  ],
  declarations: [ArmapPage]
})
export class ArmapPageModule {}
