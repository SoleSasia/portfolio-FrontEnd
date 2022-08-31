import { Component, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { PortfolioDTO } from 'src/app/dto/portfolioDTO';
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

  isLogged : boolean = true;
//  persona : PersoDTO;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {    
    this.cargarVista();
  }

  cargarVista(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.miPortfolio = data});
  }
}
