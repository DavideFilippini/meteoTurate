import { Component, AfterViewInit } from "@angular/core";

import { OpenWeatherService } from "../../services/open-weather.service";
import { WeatherapiService } from "../../services/weatherapi.service";

declare var require: any;

// export interface Chart {
//   type: ChartType;
//   data: Chartist.IChartistData;
//   options?: any;
//   responsiveOptions?: any;
//   events?: ChartEvent;
// }

@Component({
  selector: "storico",
  templateUrl: "./storico.component.html",
  styleUrls: ["./storico.component.scss"],
})
export class StoricoComponent implements AfterViewInit {
  nowTemperature: number = 0;
  feelsLikeTemperature: number = 0;
  humidity: number = 0;
  clouds: number = 0;
  previsionWeatherApiService: any;
  prevision: any;
  currentForecast: any = {};

  constructor() {
    // private weatherapiService: WeatherapiService // private openWeatherService: OpenWeatherService,
    console.log("STORICO");
  }

  convertDtInDate(dt: number): any {
    var timestamp = dt;
    var dateMillisecond = new Date(timestamp * 1000);
    const dateObject = new Date(dateMillisecond.toDateString()); //   toLocaleString("it-IT");
    const date = dateObject.getDate() + "/" + (dateObject.getMonth() + 1);

    return date ? date : "--";
  }

  convertEpochInDate(dt: number) {
    var utcSeconds = dt;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    const date = d.getDate() + "/" + (d.getMonth() + 1);
    console.log("d: ", date);
    return date;
  }

  ngAfterViewInit() {}
}
