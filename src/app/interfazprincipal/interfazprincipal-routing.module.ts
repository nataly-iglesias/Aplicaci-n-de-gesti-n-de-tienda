import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazprincipalPage } from './interfazprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazprincipalPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazprincipalPageRoutingModule {}
