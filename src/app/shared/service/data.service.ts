import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url = 'http://sbdcis.westeurope.cloudapp.azure.com/api/';  // URL to web API
  constructor (private http: Http) {}

  getResult(){
    return this.http.get(this.url + "getResult/SBD/SBX/M/QUAL/----/----")
  }

  getStartlist(){
    return this.http.get(this.url + "getStartlist/SBD/SBX/M/QUAL/----/----")
  }

  getBracket(){
    return this.http.get(this.url + "getBracket/SBD/SBX/M")
  }
}
