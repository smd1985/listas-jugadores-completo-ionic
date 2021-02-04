import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarJugadorPageRoutingModule } from './listar-jugador-routing.module';

import { ListarJugadorPage } from './listar-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarJugadorPageRoutingModule
  ],
  declarations: [ListarJugadorPage]
})
export class ListarJugadorPageModule {}
