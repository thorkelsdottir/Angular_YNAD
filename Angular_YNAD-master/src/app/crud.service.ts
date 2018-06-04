import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UsersState } from './store/store';


//gives access, lets Angular know that a class can be used with the dependency injector.
@Injectable()

//Api's talking to our server
export class CrudService {
  constructor(private http: HttpClient) { }

  ///for our user
  displayAllUsers(): Observable<any> {
    return this.http.get('http://localhost:1983/user-api', { responseType: 'json' } );
  } 

  saveNewUser(user) {
    const url ='http://localhost:1983/save-user';
    return this.http.post(url, user, { responseType: 'json' } ).subscribe();
  }

  editUser(newUserInfo) {
    const url ='http://localhost:1983/update-user';
    return this.http.post(url, newUserInfo, { responseType: 'json' } ).subscribe();
  }
 

  //for our pieces
  static getInitialPieceState(): UsersState {
    return {
      piece: []
    };
  }
  
  displayAllPieces(): Observable<any> {
    return this.http.get('http://localhost:1983/pieces-api', { responseType: 'json' } );
  } 

  saveNewPiece(piece) {
    const url ='http://localhost:1983/save-piece';
    return this.http.post(url, piece, { responseType: 'json' } ).subscribe();
  }
  
  deletePiece(idpieces) {
    // console.log("clicking delete piece");
    const url ='http://localhost:1983/delete-from-api/' + idpieces;
    return this.http.get(url);
  }

}
