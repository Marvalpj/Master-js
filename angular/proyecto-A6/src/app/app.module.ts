import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component'

import {routing , appRoutingProviders} from './app.routing';
import { ExternoComponent } from './externo/externo.component'

import {CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
