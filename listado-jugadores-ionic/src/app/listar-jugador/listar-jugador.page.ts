import { Component, OnChanges, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-jugador',
  templateUrl: './listar-jugador.page.html',
  styleUrls: ['./listar-jugador.page.scss'],
   
})
export class ListarJugadorPage implements OnInit,OnChanges {

  jugadores: any = [];
  error;

  constructor( private jugadorService: JugadoresService, private router: Router ) {
    console.log("si que me ejecuto")
  }

  ngOnChanges(){
  
  }

  ionViewWillEnter(){
    this.getJugadores();
  }

  ngOnInit(){
    // this.getJugadores();
  }

  getJugadores() {
    this.jugadorService.getJugadores()
      .subscribe(
        res => {
          console.log("jugadores son:"+JSON.stringify(res))
          this.jugadores = res;
        },
        err =>{
          this.error = JSON.stringify(err)
          console.error(err)
        } 

      );
  }

  addJugador(){
    this.router.navigate(['/add-jugador']);
  }

  actualizarJugador(id){
    this.router.navigate(['/add-jugador', {id : id}]);
  }

  goHome(id){
    this.router.navigate(['/home', {id : id}]);
  }

  borrarJugador(id: string) {
    this.jugadorService.deleteJugador(id)
      .subscribe(
        res => {
          console.log(res);
          this.getJugadores();
        },
        err => console.error(err)
      )
  }

}
