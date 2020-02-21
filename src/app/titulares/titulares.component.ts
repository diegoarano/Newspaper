import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import{DataService} from "../services/data.service"

import { from } from 'rxjs';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})
export class TitularesComponent  {

 articulo: string ="";

  constructor(public _route:ActivatedRoute, public _data: DataService) { 
   this.articulo = _route.snapshot.params["indice"];

  }

  }
