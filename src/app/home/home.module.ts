import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListaProyectosComponent } from './home/lista-proyectos/lista-proyectos.component';



@NgModule({
  declarations: [HomeComponent, ListaProyectosComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
