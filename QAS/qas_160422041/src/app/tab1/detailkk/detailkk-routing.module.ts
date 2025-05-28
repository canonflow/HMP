import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailkkPage } from './detailkk.page';

const routes: Routes = [
  {
    path: '',
    component: DetailkkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailkkPageRoutingModule {}
