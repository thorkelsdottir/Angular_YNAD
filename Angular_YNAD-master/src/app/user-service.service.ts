import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }

  displayAllUsers(): Observable<any> {
    return this.http.get('http://localhost:1983/user-api', { responseType: 'json' } );
  } 

}
