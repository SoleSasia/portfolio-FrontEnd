import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/dto/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //urlBackend: string = "http://localhost:8080/"
  
  //TODO: resolver login
  isAdmin: boolean = true;
  
  listaExpe: Experiencia[] = [];//revisar y crear dto portfolio
  experiencia: Experiencia;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;

 

  constructor() { }

  ngOnInit(): void {
  }








































   /*
  //VARIABLES DEL MODELO
  experiencia:any = [
    {
      nombreOrganismo: "A Pedal", 
      fechaInicio: "setiembre 2020", 
      fechaFin: "actualidad",
      puesto: "fundadora",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et porro totam sunt pariatur animi sit ullam, unde sapiente voluptate rerum illum placeat fugiat aliquam, voluptatibus nostrum inventore fugit. Nihil.",
      urlLogo: ""
    },

    {
      nombreOrganismo: "Centro Vipassana", 
      fechaInicio: "agosto 2019", 
      fechaFin: "agosto 2020",
      puesto: "manager",
      descripcion: "sin palabras...",
      url_logo: ""
    },
  ];
  */
}
