import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Inject, Injectable} from "@angular/core";
//import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})



@Injectable()
export class BaseService {
http: HttpClient;
// apiLocation = environment.baseUrl + environment.versionUrl;

constructor(
@Inject(HttpClient) http: HttpClient,

) {
this.http = http;
}
}