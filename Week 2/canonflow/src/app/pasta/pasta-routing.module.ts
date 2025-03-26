import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastaPage } from './pasta.page';

const routes: Routes = [
  {
    path: '',
    component: PastaPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastaPageRoutingModule {}
