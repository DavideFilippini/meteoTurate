import { Component, AfterViewInit } from "@angular/core";

import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { OpenWeatherService } from "../services/open-weather.service";
import { WeatherapiService } from "../services/weatherapi.service";

declare var require: any;

const data = require("./data.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements AfterViewInit {
  nowTemperature: number = 0;
  feelsLikeTemperature: number = 0;
  humidity: number = 0;
  clouds: number = 0;
  previsionWeatherApiService: any;
  prevision: any;
  currentForecast: any = {};

  constructor(
    // private openWeatherService: OpenWeatherService,
    private weatherapiService: WeatherapiService
  ) {
    // this.openWeatherService.requestMeteo().subscribe((data) => {
    //   let mainData = (data as any).main;
    //   this.feelsLikeTemperature = mainData.feels_like;
    // });

    // this.openWeatherService.prevision().subscribe((data) => {
    //   this.prevision = (data as any).daily;

    //   this.prevision.forEach((elem: { date: any; dt: number }) => {
    //     elem.date = this.convertDtInDate(elem.dt);
    //   });
    // });

    this.weatherapiService.requestMeteo().subscribe((data) => {
      console.log("requestMeteo weatherapiService: ", data);

      this.previsionWeatherApiService = (data as any).forecast.forecastday;
      this.currentForecast = (data as any).current;

      console.log("CURRENT weatherapiService: ", this.currentForecast);
      this.nowTemperature = this.currentForecast.temp_c
        ? this.currentForecast.temp_c
        : "--";

      this.clouds = this.currentForecast.cloud
        ? this.currentForecast.cloud
        : "--";
      this.humidity = this.currentForecast.humidity
        ? this.currentForecast.humidity
        : "--";

      this.previsionWeatherApiService.forEach(
        (elem: { date: any; date_epoch: any }) => {
          elem.date = this.convertEpochInDate(elem.date_epoch);
        }
      );

      console.log(
        "requeprevisionWeatherApiService forecast: ",
        this.previsionWeatherApiService
      );
    });
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

  // Barchart
  barChart1: Chart = {
    type: "Bar",
    data: data["Bar"],
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20,
      },
      axisY: {
        showGrid: true,
        offset: 40,
      },
      height: 360,
    },

    responsiveOptions: [
      [
        "screen and (min-width: 640px)",
        {
          axisX: {
            labelInterpolationFnc: function (
              value: number,
              index: number
            ): string {
              return index % 1 === 0 ? `${value}` : "";
            },
          },
        },
      ],
    ],
  };

  // This is for the donute chart
  donuteChart1: Chart = {
    type: "Pie",
    data: data["Pie"],
    options: {
      donut: true,
      height: 260,
      showLabel: false,
      donutWidth: 20,
    },
  };
}
