import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJugadorPage } from './add-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: AddJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJugadorPageRoutingModule {}
