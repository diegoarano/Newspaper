import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders } from '@angular/common/http'

import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  articulos: object= {}

  constructor(public _http: HttpClient) {

  let httpConfig: object={
       "headers": new HttpHeaders({
         "content-type":"application/json"
       })

  }



    _http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a6118e85dc049a5b4225cb7b8923623")
    .subscribe((responseApi) => {
      this.articulos = responseApi["articles"]
        console.log(responseApi)

    })

   }
}
