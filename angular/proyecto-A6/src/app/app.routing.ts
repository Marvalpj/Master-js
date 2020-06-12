//importar modulos de router de angular
import { ModuleWithProviders } from '@angular/core';
import {Routes , RouterModule } from '@angular/router'

//importar los componentes

import {ZapatillasComponent} from './zapatillas/zapatillas.component'
import {VideojuegoComponent} from './videojuego/videojuego.component'
import {CursosComponent} from './cursos/cursos.component'
import {HomeComponent} from './home/home.component'

//array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent} ,
    {path: 'home', component: HomeComponent} ,
    {path: 'zapatillas', component: ZapatillasComponent} ,
    {path: 'videojuego', component: VideojuegoComponent} ,
    {path: 'cursos', component: CursosComponent} ,
    {path: 'cursos/:nombre', component: CursosComponent} ,
    {path: 'cursos/:nombre/:followers', component: CursosComponent} ,
    {path: '**' , component: HomeComponent} 
]

//exportar el modulo del router
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)



