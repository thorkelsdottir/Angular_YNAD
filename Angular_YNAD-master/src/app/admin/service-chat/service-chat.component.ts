import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
@Component({
  selector: 'app-service-chat',
  templateUrl: './service-chat.component.html',
  styleUrls: ['./service-chat.component.scss']
})
export class ServiceChatComponent implements OnInit {
  constructor(private chatService: ChatService) { }
  async ngOnInit() {
    var response = await this.chatService.getMessages();
    // console.log(response.json());
    // display message list from backend since its no longer definded locally
    // placeing console.log(response.json()); 
    // this.messages = response.json();
  }
  message = {
    owner: "",
    text: ""
  }
  
  post() {
    console.log(this.message);
    this.chatService.postMessage(this.message);
  }
}