import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabBlandaDTO } from 'src/app/dto/habBlandaDTO';
import { HabTecnicaDTO } from 'src/app/dto/habTecnicaDTO';
import { NivelHabilidad } from 'src/app/dto/nivelHabilidad';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  //TODO: resolver login
  @Input() isLogged: boolean;
  @Input() idPerso : number;
  @Input() listaHabTecnica: HabTecnicaDTO[];
  @Input() listaHabBlanda: HabBlandaDTO[] = [];
  //recarga vista portfolio
  @Output() recargandoPortfolio = new EventEmitter<any>();

  //listas separadas por nivel de suficiencia (habTecnica)
  listaAvanzado: HabTecnicaDTO[];
  listaIntermedio: HabTecnicaDTO[];
  listaBasico: HabTecnicaDTO[];

  habTecnica: HabTecnicaDTO;
  habBlanda: HabBlandaDTO;

  tituloModal: string = "";
  //variable para mostrar el modal
  agregarEditarActivado: boolean = false;
  //variable para mostrar contenido del modal segun tipo de habilidad
  esHabTecnica: boolean = false;
  esHabBlanda: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    
    
    this.separando();

    //console.log(this.listaIntermedio[0].nombreHabilidad);
  }

  //seṕarando listas y reasignango por nivel
  separarPorNivel(){
    
    for (let hab of this.listaHabTecnica){
      if (hab.nivelId == 1){
        this.listaAvanzado.push(hab);
      } else if (hab.nivelId == 2){
        this.listaIntermedio.push(hab);
      } else {
        this.listaBasico.push(hab);
      }
    }
  }

  separando(){
    this.listaAvanzado = this.listaHabTecnica.filter((el) => el.nivelId == 1);
    this.listaIntermedio = this.listaHabTecnica.filter((el) => el.nivelId == 2);
    this.listaBasico = this.listaHabTecnica.filter((el) => el.nivelId == 3);
  }

  abrirModalAgregar() : void {
    if (this.esHabBlanda){
      let habBlan = {id:0,personaId:this.idPerso,nombreHabilidad:"",urlIcono:""};
      this.habBlanda = habBlan;
      this.tituloModal = "Agregar elemento a Habilidades Blandas";
      this.agregarEditarActivado = true; 
    } else if (this.esHabTecnica){
      let habTec = {id:0,personaId:this.idPerso,nivelId:0, nombreHabilidad:"",urlIcono:""};
      this.habTecnica = habTec;
      this.tituloModal = "Agregar elemento a Habilidades Técnicas";
      this.agregarEditarActivado = true;
    }
  }

  editarHabTecnica(habTec: HabTecnicaDTO): void {
    this.habTecnica = habTec;
    this.tituloModal = "Editar elemento en Habilidades Técnicas";
    this.agregarEditarActivado = true;    
  }

  eliminarHabTecnica(habTecId: any): void {
    if(habTecId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarHabTecnica(habTecId).subscribe(data => {
        alert("El elemento ha sido eliminado");
        this.recargandoPortfolio.emit();
        });
    }
  }

  editarHabBlanda(habBlan: HabBlandaDTO): void {
    this.habBlanda = habBlan;
    this.tituloModal = "Editar elemento en Habilidades Blandas";
    this.agregarEditarActivado = true;
  }

  eliminarHabBlanda(habBlanId: any): void {
    if(habBlanId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarHabBlanda(habBlanId).subscribe(data => {
        alert("El elemento ha sido eliminado");
        this.recargandoPortfolio.emit();
        });
    }
  }

  cerrarModal(): void {
    this.esHabTecnica = false;
    this.esHabBlanda = false;
    this.agregarEditarActivado = false;
    this.recargandoPortfolio.emit();
  }
}
