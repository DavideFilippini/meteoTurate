import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from "./baseService"
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})






export class OpenWeatherService extends BaseService{

  constructor(private httpClient: HttpClient){
    super(httpClient)
  }


  requestMeteo() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Turate,it&units=metric&appid=03424424d7f3e2caa885fd1db949cf3d`;
    let res =  this.httpClient.get(url);
    console.log("res: ",res);
    return res;

  }




  
 
}
