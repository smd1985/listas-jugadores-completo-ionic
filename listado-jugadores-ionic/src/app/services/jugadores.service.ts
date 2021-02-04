import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/Jugador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  // API_URI = 'http://localhost:3000/api';
  API_URI = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getJugadores() {
    return this.http.get(`${this.API_URI}/jugadores`);
  }

  getJugador(id: string) {
    return this.http.get(`${this.API_URI}/jugadores/${id}`);
  }

  deleteJugador(id: string) {
    return this.http.delete(`${this.API_URI}/jugadores/${id}`);
  }

  saveJugador(jugador:FormData) {  
    console.log("jugador es:"+jugador)
    console.log("jugador es:"+JSON.stringify(jugador))
    console.log("jugador es:"+jugador.get('nombre'))
    console.log("jugador es:"+jugador.get('imagen'))
    return this.http.post(`${this.API_URI}/jugadores`, jugador);
  }

  updateJugador(id: string|number, updatedJugador:FormData): Observable<Jugador> {
    return this.http.put(`${this.API_URI}/jugadores/${id}`, updatedJugador);
  }

}
