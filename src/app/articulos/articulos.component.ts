import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router'

import{DataService} from "../services/data.service"

import { from } from 'rxjs';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']

})
export class ArticulosComponent  {
  


  constructor(public _route:ActivatedRoute, public _data: DataService) { 
   
  
  }

 

}
