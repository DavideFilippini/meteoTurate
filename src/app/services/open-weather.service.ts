import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./baseService";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class OpenWeatherService extends BaseService {
  private openweathermapKey: string = "03424424d7f3e2caa885fd1db949cf3d";
  // constructor(){
  //   super(httpClient)
  // }

  requestMeteo() {
    const url =
      `http://api.openweathermap.org/data/2.5/weather?q=Turate,it&units=metric&appid=` +
      this.openweathermapKey;
    let res = this.http.get(url);
    return res;
  }

  prevision() {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=45.6582&lon=9.0053&exclude=hourly&units=metric&appid=" +
      this.openweathermapKey;
    let res = this.http.get(url);
    return res;
  }
}
