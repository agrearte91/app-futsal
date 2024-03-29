import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { validarEsFacultad, dniUnico, noigual } from '../planilla-inscripcion/planilla.validator'
import { EquipoService } from '../../services/equipo.service';
import { ActivatedRoute } from '@angular/router';
import { ListaInscripcionService } from '../../services/lista-inscripcion.service';

@Component({
  selector: 'app-planilla-inscripcion',
  templateUrl: './planilla-inscripcion.component.html',
  styleUrls: ['./planilla-inscripcion.component.css']
})
export class PlanillaInscripcionComponent implements OnInit {

  formPlanilla:FormGroup
  equiposTotales:any = [] //todos los equipos cargados en la base
  equiposTorneo:any = [] // todos los equipos inscriptos en el torne
  equiposDisponibles:any = [] //equipos que todavia no se inscribieron, es la diferencia entre las listas anteriores
  equipo:any
  constructor(private route:ActivatedRoute ,private equipServ:EquipoService,private listServ:ListaInscripcionService, private fb:FormBuilder) {
    
    this.route.params.subscribe(params =>{
      this.equipServ.getEquipos().subscribe(equipos => {
        this.equiposTotales = equipos
      })
      this.listServ.getEquiposInscriptos().subscribe(listas => {
        listas.forEach(equipoInscripto => {
          if (equipoInscripto.anio_torneo==params.anioTorneo && equipoInscripto.tipo_torneo == params.tipoTorneo){
           this.equiposTorneo.push(equipoInscripto);
          }
        })
        this.getEquiposDisponibles();
      })
      
      console.log(this.equiposDisponibles)
    })

    this.formPlanilla = this.fb.group({
      nombreEquipo : new FormControl('',Validators.required),
      
      jugadores: this.fb.array(
        [   
          this.fb.group({
            dni: this.fb.control('',Validators.required), //hacer validacion para no repetir jugadores en la lista
            nombre: this.fb.control('',Validators.required),
            apellido: this.fb.control('', Validators.required),
            fechaNacimiento: new FormControl('', Validators.required),
            legajo: new FormControl(''), //hacer una validacion de que el legajo no sea duplicado
            facultad: new FormControl('')
          })
        ],Validators.minLength(5)
      ),
      
      delegado: this.fb.group ({
        dni : new FormControl(''),//agregar que el dni pertezca a uno de la lista de jugadores
        telefono : this.fb.control('',[Validators.pattern("[0-9]+"), Validators.minLength(9)]),
        correo : new FormControl('', [Validators.required, Validators.email])
      }),

      subdelegado : this.fb.group ({
        dni : new FormControl(''),
        telefono : new FormControl('',[Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(9)]),
        correo : new FormControl('', [Validators.required, Validators.email])
      }),

      capitan: this.fb.control('',Validators.required)

    });

     ((<FormGroup>((<FormArray>this.formPlanilla.controls['jugadores']).controls)[0])
     .controls['dni']
     .setValidators([Validators.required, Validators.pattern("[0-9]+"), dniUnico.bind(this.formPlanilla)]));
    
    //subdelegado no es la misma persona que el delegado
     (<FormGroup>this.formPlanilla.controls['subdelegado']).controls['dni']
     .setValidators([Validators.required, noigual.bind(this.formPlanilla.controls['delegado'])]);
    //delegado no es la misma persona que el delegado
     (<FormGroup>this.formPlanilla.controls['delegado']).controls['dni']
     .setValidators([Validators.required, noigual.bind(this.formPlanilla.controls['subdelegado'])])
    

    this.formPlanilla.statusChanges
    .subscribe(data => {
      console.log(data);
      console.log(this.formPlanilla)
    });

    (<FormGroup>this.formPlanilla.controls['subdelegado']).controls['dni']
    .statusChanges.subscribe(data => {
      console.log('dni subdelegado')
      console.log( data);
    });

    console.log(this.formPlanilla.value)

   }

   nombreEquipo() : FormControl{
    return this.formPlanilla.controls['nombreEquipo'] as FormControl
   }

   jugadores() : FormArray {
     return this.formPlanilla.controls['jugadores'] as FormArray
   }

   delegado() : FormGroup {
     return this.formPlanilla.controls['delegado'] as FormGroup
   }

   subdelegado() : FormGroup {
    return this.formPlanilla.controls['subdelegado'] as FormGroup
  }

   agregarJugador() {
     (<FormArray>this.formPlanilla.controls['jugadores']).push( 
      this.fb.group ({
      dni: this.fb.control('',[Validators.required,Validators.pattern("[0-9]+"),dniUnico.bind(this.formPlanilla)]),
      nombre: this.fb.control('',Validators.required),
      apellido: this.fb.control('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      legajo: new FormControl(''), //hacer una validacion de que el legajo no sea duplicado
      facultad: new FormControl('') //hacer validacion de facultades de la universidad 
     }))
  }

  quitarJugador(i: number) {
    (<FormArray>this.formPlanilla.controls['jugadores']).removeAt(i);
  }

  getEquiposDisponibles(){
    this.equiposDisponibles = []
    this.equiposTotales.forEach(equipoCandidato => {
    
      if(!this.equiposTorneo.find(element => equipoCandidato.id_equipo == element.id_equipo))
      this.equiposDisponibles.push(equipoCandidato)
   })
  }

  guardarEquipo(evento){
    this.equipo = this.equiposDisponibles.find(x => x.nombre === evento.target.value)
    console.log(this.equipo)
  }

  
  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.formPlanilla)
  }
}

