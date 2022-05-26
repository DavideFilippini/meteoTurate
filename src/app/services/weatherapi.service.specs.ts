import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./baseService";
import "rxjs/add/operator/map";
import { TestBed } from "@angular/core/testing";
import { WeatherapiService } from "./weatherapi.service";

describe("WeatherapiService", () => {
  let service: WeatherapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherapiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
