import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }

  saveNewUser(user) {
    const url ='http://localhost:1983/save-user';
    return this.http.post(url, user, { responseType: 'json' } ).subscribe();
  }

  editUser(newUserInfo) {
    const url ='http://localhost:1983/update-user';
    return this.http.post(url, newUserInfo, { responseType: 'json' } ).subscribe();
  }
 
4
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
