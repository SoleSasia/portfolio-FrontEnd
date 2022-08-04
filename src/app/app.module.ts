import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarEduComponent } from './componentes/educacion/modificar-edu/modificar-edu.component';
import { EliminarEduComponent } from './componentes/educacion/eliminar-edu/eliminar-edu.component';
import { AgregarEditarEduComponent } from './componentes/educacion/agregar-editar-edu/agregar-editar-edu.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    ExperienciaYEducacionComponent,
    HabilidadesComponent,
    NavbarComponent,
    EducacionComponent,
    InicioComponent,
    ModificarEduComponent,
    EliminarEduComponent,
    AgregarEditarEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
