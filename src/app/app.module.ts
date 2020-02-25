import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { TitularesComponent } from './titulares/titulares.component';
import { ArticulosComponent } from './articulos/articulos.component';



import {HttpClientModule} from '@angular/common/http';


import { DataService } from './services/data.service';
import { ErrorComponent } from './error/error.component';

const RouterConfig: Routes =[
  {"path":"titulares/:indice", "component":TitularesComponent},
  {"path":"articulos", "component":ArticulosComponent},
  {"path":"**", "component":ErrorComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    TitularesComponent,
    ArticulosComponent,
    ErrorComponent
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
