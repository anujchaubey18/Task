import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllapiserviceService {

  constructor(public http: HttpClient) { }

  public allData() {
    return this.http.get(environment.baseurl);
  }
}
