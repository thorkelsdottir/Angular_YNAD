import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../crud.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user = {}
  

  constructor(private authService: AuthService, private crudservice: CrudService ) { }


  ngOnInit() {
    this.crudservice.displayAllUsers().subscribe(data => {
       this.user  = data[0];      
    });
  }

}
