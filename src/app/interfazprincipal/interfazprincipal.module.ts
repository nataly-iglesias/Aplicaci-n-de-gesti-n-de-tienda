import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazprincipalPageRoutingModule } from './interfazprincipal-routing.module';

import { InterfazprincipalPage } from './interfazprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazprincipalPageRoutingModule
  ],
  declarations: [InterfazprincipalPage]
})
export class InterfazprincipalPageModule {}
