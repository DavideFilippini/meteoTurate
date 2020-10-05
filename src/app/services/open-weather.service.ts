import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from "./baseService"
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService extends BaseService {

  // constructor(){
  //   super(httpClient)
  // }


  requestMeteo() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Turate,it&units=metric&appid=03424424d7f3e2caa885fd1db949cf3d`;
    let res = this.http.get(url);
    console.log("res: ", res);
    return res;
  }



  prevision() {
    //  https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.6582&lon=9.0053&exclude=hourly&units=metric&appid=03424424d7f3e2caa885fd1db949cf3d";
    let res = this.http.get(url);
    console.log("res prevision: ", res);
    return res;
  }









}
