import { Component, OnInit } from '@angular/core';
import { PortfolioDTO } from 'src/app/dto/portfolioDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio : PortfolioDTO;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(
      data => {this.portfolio = data})

  }

}
