import { Injectable } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  
  private categorias: any[] = [
    {
      'categoria':'A',
      'equipos':[]
    },
    { 'categoria':'B',
      'equipos': ['Proyecto de Equipo', 'Villa Muten', 'Absolut fc', 'Real Coholicos','200 de paleta',
                  'Barrilete Cosmico', 'Los Amigos de tu Hermana', 'Brujas fc', 'Manzana de Newton', 'Kawabonga']
    } 
  ]

  //estructura auxiar para el armado del fixture de una categoria

  private partidosArmados = new Array();


  private fixture: any[] = [
      {'fecha':[
        { 'local':'Absolut Fc',
          'visitante':'Kawabonga',
          'detalle':'23:20'
        },
        {
          'local':'Villa Muten',
          'visitante':'Proyecto de Equipo',
          'detalle':'postergado'
        },
        {
          'local':'Real Coholicos',
          'visitante':'200 de Paleta',
          'detalle':'Postergado'
        },
        {
          'local':"Barrileta Cosmico",
          'visitante':'Los Amigos de tu Hna',
          'detalle':'postergado'
        },
        {
          'local':'Brujas Fc',
          'visitante':'Manzana de Newton',
          'detalle':'20:00'
        }
      ],
      "categoria": "B"
    },
    {'fecha':[
      { 'local':'Absolut Fc',
        'visitante':'200 de paleta',
        'detalle':''
      },
      {
        'local':'Villa Muten',
        'visitante':'Los Amigos de tu Hna',
        'detalle':''
      },
      {
        'local':'Real Coholicos',
        'visitante':'Manzana de Newton',
        'detalle':''
      },
      {
        'local':"Barrileta Cosmico",
        'visitante':'Kawabonga',
        'detalle':''
      },
      {
        'local':'Brujas',
        'visitante':'Proyecto de Equipo',
        'detalle':''
      }
    ],
    "categoria":"B"
  },
  {'fecha':[
    { 'local':'Absolut Fc',
      'visitante':'Los amigos de tu hermana',
      'detalle':'----'
    },
    {
      'local':'Villa Muten',
      'visitante':'Manzana de Newton',
      'detalle':'----'
    },
    {
      'local':'200 de Paleta',
      'visitante':'Kawabonga',
      'detalle':'----'
    },
    {
      'local':"Barrileta Cosmico",
      'visitante':'Proyecto de Equipo',
      'detalle':'----'
    },
    {
      'local':'Brujas Fc',
      'visitante':'Real Coholicos',
      'detalle':'----'
    }
  ],
  "categoria":"B"
},{'fecha':[
  { 'local':'Absolut Fc',
    'visitante':'Brujas Fc',
    'detalle':'----'
  },
  {
    'local':'Villa Muten',
    'visitante':'Kawabonga',
    'detalle':'----'
  },
  {
    'local':'Real Coholicos',
    'visitante':'Proyecto de Equipo',
    'detalle':'----'
  },
  {
    'local':"Barrileta Cosmico",
    'visitante':'200 de Paleta',
    'detalle':'----'
  },
  {
    'local':'Manzana de Newton',
    'visitante':'Los amigos de tu hermana',
    'detalle':'----'
  }
],
"categoria":"B"
},{'fecha':[
  { 'local':'Absolut Fc',
    'visitante':'Proyecto de Equipo',
    'detalle':'----'
  },
  {
    'local':'Villa Muten',
    'visitante':'200 de Paleta',
    'detalle':'----'
  },
  {
    'local':'Real Coholicos',
    'visitante':'Los amigos de tu hermana',
    'detalle':'----'
  },
  {
    'local':"Barrileta Cosmico",
    'visitante':'Manzana de Newton',
    'detalle':'----'
  },
  {
    'local':'Brujas Fc',
    'visitante':'Kawabonga',
    'detalle':'----'
  }
],
"categoria":"B"
},

    ]
  constructor() {
   }

   getFechas(categoria:string):any[]{
     let fechas:any[] = new Array();
     let contador = this.fixture.length;
     for (let i=0; i < contador; i++ ){
       console.log(this.fixture[i].categoria)
       if(this.fixture[i].categoria==categoria){
         fechas.push(this.fixture[i])
       }
     }
     return fechas;
   }

getEquipos(categoria:string){
  let cantCategorias = this.categorias.length;
  let equipos:any[] = new Array();
  let encontrado=false;
  for (let i = 0; i < cantCategorias && !encontrado ; i++){
    if(this.categorias[i].categoria == categoria){
      equipos = this.categorias[i].equipos;
      encontrado = true;
    } 
  }
  return equipos;

}

getProximaFecha(fechaActual:number) {
  if (fechaActual+1 < this.fixture.length)
    return this.fixture[fechaActual+1].fecha

return 0;
}

getFechaAnterior(fechaActual:number) {
  if (fechaActual-1 >= 0)
    return this.fixture[fechaActual-1].fecha
  return 0;
}

guardarPartido(local: string, visitante: string){
  
  this.partidosArmados.push({'local':local,'visitante':visitante});
  console.log(this.partidosArmados)

}
//solo se utiliza para fechas posteriores a la fecha 1
//se arma una nueva lista de dispobles para un equipo teniendo en cuenta la fecha actual y las ateriores
obtenerDisponibles(equipo:string, candidatos:any[]){
  let partidosAnteriores = new Array()
  let nuevosCandidatos= candidatos.slice();
  let cantidadPartidos= this.partidosArmados.length;
  for(let i=0; i<cantidadPartidos; i++ ){
  
    if (this.partidosArmados[i].local == equipo){
      partidosAnteriores.push(this.partidosArmados[i].visitante)
    }
    if(this.partidosArmados[i].visitante == equipo){
      partidosAnteriores.push(this.partidosArmados[i].local)
    }
  }
 
  //elimino de la lista de candidatos a todos los equipos que estan en partidosAteriores
  for(let i = 0; i < partidosAnteriores.length ;i++){
    let ubicacion = nuevosCandidatos.indexOf(partidosAnteriores[i]);
    nuevosCandidatos.splice(ubicacion,1);
  }
  return nuevosCandidatos;

}

}
