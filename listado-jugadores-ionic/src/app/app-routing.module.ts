import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-jugador',
    loadChildren: () => import('./add-jugador/add-jugador.module').then( m => m.AddJugadorPageModule)
  },
  {
    path: 'listar-jugador',
    loadChildren: () => import('./listar-jugador/listar-jugador.module').then( m => m.ListarJugadorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
