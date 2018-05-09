import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ChatService {
  BASE_URL = 'http://localhost:1982/api'
  messages = [];
  
  constructor( private http: Http) { 
    this.getMessages();
  }
  async getMessages() {
    // returns a promise
    // return this.http.get(this.BASE_URL + '/messages').toPromise();
    var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
    this.messages = response.json();
  }
  async postMessage(message) {
    var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
    this.messages.push(response.json());
  }
  
}