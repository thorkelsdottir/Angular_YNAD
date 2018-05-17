import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user = {}
  
  constructor(private userservice: UserServiceService ) { }

  ngOnInit() {
    this.userservice.displayAllUsers().subscribe(data => {
       this.user  = data[0];
      // console.log(data[0]);
    });
  }

 

}
