import { Component, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { PortfolioDTO } from 'src/app/dto/portfolioDTO';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
//soluciona error ctx.miPortfolio
  miPortfolio : PortfolioDTO;
  /*              id: 0,
                nombre: "",
                ocupacion: "",
                bannerUrl : "",
                email: "",
                linkedinUrl : "",
                githubUrl : "",
                descripcion : "",
                imgUrl : "",
                educaciones: [], 
                experiencias: [],
                habTecnicas: [],
                habBlandas: [],
                proyectos: []
  };*/

  isLogged : boolean = false;
//  persona : PersoDTO;

  constructor(private portfolioServ : PortfolioService, private autenticacion: AutenticacionService) { }

  ngOnInit(): void {    
    this.cargarVista();
<<<<<<< HEAD
    //zk
    this.isLogged = !!this.autenticacion.getToken();
=======
    this.isLogged = this.autenticacion.verificarisLogged();
>>>>>>> 515170ab373c6747d5dabfb3278303f7dc52638e
  }

  cargarVista(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.miPortfolio = data});
  }
}
