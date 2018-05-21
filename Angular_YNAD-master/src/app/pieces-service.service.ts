import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PiecesServiceService {

  constructor(private http: HttpClient) { }

  displayAllPieces(): Observable<any> {
    return this.http.get('http://localhost:1983/pieces-api', { responseType: 'json' } ).map(res => res);
  } 

}
