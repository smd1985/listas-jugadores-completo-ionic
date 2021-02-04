import { Component, OnInit,Input } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.page.html',
  styleUrls: ['./add-jugador.page.scss'],
})
export class AddJugadorPage implements OnInit {

  @Input() propiedad_uno:string;
  @Input() propiedad_dos:string;

  jugadores: any = [];
  //datos para bindear
  titulo:string;
  nombre:string;
  equipo:string;
  nacionalidad:string;
  posicion:string;
  imagen:any;
  //fotos
  photoSelected: string | ArrayBuffer;
  file: File;
  //finfotos

  edit: boolean = false;
  cambioimagen: boolean = false;

  id:string;
  constructor( private jugadorService: JugadoresService, private router: Router,private route:ActivatedRoute ) { 

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("uid es:"+this.id)

  }


  ngOnInit() {
    this.titulo="Añadir jugador";
    console.log("hay id:"+this.id)
    if(this.id != null){
      console.log("si que editamos")
      this.titulo="Actualizar jugador";
      this.jugadorService.getJugador(this.id)
      .subscribe(
        res => {
          
          var a = res;
          console.log("res es:"+JSON.stringify(a));
          // this.game = res;
          this.nombre=res['nombre']
          this.equipo=res['equipo']
          this.nacionalidad=res['nacionalidad']
          this.posicion=res['posicion']
          this.imagen=res['imagen']                    
          this.edit = true;
        },
        err => console.log(err)
      )

    }else{
      console.log("no editamos, creamos")
    }
  }

  //funcion para leer imagen seleccionada
  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      console.log("foto es222: "+JSON.stringify(this.file))
      reader.readAsDataURL(this.file);
    }
    this.cambioimagen=true;
  }
  //finfotos


  guardarJugador() {

    const fd = new FormData();
    console.log("nombre es:"+this.nombre)
    fd.append('nombre',this.nombre);
    fd.append('equipo',this.equipo);
    fd.append('nacionalidad',this.nacionalidad);
    fd.append('posicion',this.posicion);
    fd.append('imagen',this.file);

    this.jugadorService.saveJugador(fd)
      .subscribe(
        res => {
          console.log("jugadores son:"+JSON.stringify(res))
          this.jugadores = res;
          this.router.navigate(['/listar-jugador']);
        },
        err => console.error(err)
      );
  }

  actualizarJugador(nombre,equipo,nacionalidad,posicion,imagen) {

    const fd = new FormData();
    console.log("nombre es:"+this.nombre)
    fd.append('nombre',this.nombre);
    fd.append('equipo',this.equipo);
    fd.append('nacionalidad',this.nacionalidad);
    fd.append('posicion',this.posicion);
    fd.append('imagen',this.file);

    this.jugadorService.updateJugador(this.id,fd)
      .subscribe(
        res => {
          console.log("jugadores son:"+JSON.stringify(res))
          this.jugadores = res;
          this.router.navigate(['/listar-jugador']);

        },
        err => console.error(err)
      );
  }

  atras(id){
    this.router.navigate(['/listar-jugador', {id : id}]);
  }

}
