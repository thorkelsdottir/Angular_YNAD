import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UsersState } from './store/store';

@Injectable()
export class PiecesServiceService {

  constructor(private http: HttpClient) { }

  static getInitialPieceState(): UsersState {
    return {
      piece: []
    };
  }
  displayAllPieces(): Observable<any> {
    // console.log("this is reading the displayAllPieces in piecesServiceService");
    return this.http.get('http://localhost:1983/pieces-api', { responseType: 'json' } );
  } 

}
