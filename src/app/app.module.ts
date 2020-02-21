import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { TitularesComponent } from './titulares/titulares.component';
import { ArticulosComponent } from './articulos/articulos.component';



import {HttpClientModule} from '@angular/common/http';


import { DataService } from './services/data.service';

const RouterConfig: Routes =[
  {"path":"titulares/:indice", "component":TitularesComponent},
  {"path":"articulos", "component":ArticulosComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    TitularesComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true}),
    
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
