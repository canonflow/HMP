import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailkkPageRoutingModule } from './detailkk-routing.module';

import { DetailkkPage } from './detailkk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailkkPageRoutingModule
  ],
  declarations: [DetailkkPage]
})
export class DetailkkPageModule {}
