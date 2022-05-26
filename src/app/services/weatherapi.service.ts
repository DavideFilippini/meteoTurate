import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./baseService";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class WeatherapiService extends BaseService {
  private openweathermapKey: string = "a800bf61abdc454795984028222605";
  // constructor(){
  //   super(httpClient)
  // }

  requestMeteo() {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=a800bf61abdc454795984028222605&q=45.65509445938792,9.00179612723911&days=5&aqi=yes&alerts=yes&lang=it`;
    let res = this.http.get(url);
    return res;
  }

  prevision() {
    const url =
      "http://api.weatherapi.com/v1/current.json?key=a800bf61abdc454795984028222605&q=45.65509445938792,9.00179612723911&aqi=yes&lang=it";
    let res = this.http.get(url);
    return res;
  }
}
