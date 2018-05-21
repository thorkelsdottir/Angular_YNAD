import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { CrudService } from '../../crud.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user = {}
  

  constructor(private authService: AuthService, private userservice: UserServiceService, private crudservice: CrudService ) { }


  ngOnInit() {
    this.userservice.displayAllUsers().subscribe(data => {
       this.user  = data[0];      
    });
  }

}
