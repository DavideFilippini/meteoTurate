import { Component, AfterViewInit } from '@angular/core';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { OpenWeatherService } from '../services/open-weather.service'


declare var require: any;

const data = require('./data.json');





export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements AfterViewInit {

	nowTemperature: number = 0;
	feelsLikeTemperature: number = 0;
	humidity: number = 0;
	clouds: number = 0;

	prevision: any;

	constructor(private openWeatherService: OpenWeatherService) {
		// this.openWeatherService.requestMeteo();

		this.openWeatherService.requestMeteo().subscribe((data) => {
			console.log(data);
			let mainData = (data as any).main;
			this.nowTemperature = mainData.temp;
			this.feelsLikeTemperature = mainData.feels_like;
			this.humidity = mainData.humidity;
			this.clouds = (data as any).clouds.all;
			console.log("TEMP: ", this.nowTemperature);


		});

		this.openWeatherService.prevision().subscribe((data) => {
			console.log("prevision: ", data);
			this.prevision = (data as any).daily;

		});  


	}


	convertDtInDate(dt: number): any {

		var timestamp = dt;
		var date = new Date(timestamp * 1000);
		var iso = date.toISOString().match(/(\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)
		return (iso ? iso[1] : "--");

	}


	ngAfterViewInit() { }

	// Barchart
	barChart1: Chart = {
		type: 'Bar',
		data: data['Bar'],
		options: {
			seriesBarDistance: 15,
			high: 12,

			axisX: {
				showGrid: false,
				offset: 20
			},
			axisY: {
				showGrid: true,
				offset: 40
			},
			height: 360
		},

		responsiveOptions: [
			[
				'screen and (min-width: 640px)',
				{
					axisX: {
						labelInterpolationFnc: function (value: number, index: number): string {
							return index % 1 === 0 ? `${value}` : '';
						}
					}
				}
			]
		]
	};

	// This is for the donute chart
	donuteChart1: Chart = {
		type: 'Pie',
		data: data['Pie'],
		options: {
			donut: true,
			height: 260,
			showLabel: false,
			donutWidth: 20
		}
	};
}
