import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarJugadorPage } from './listar-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: ListarJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarJugadorPageRoutingModule {}
