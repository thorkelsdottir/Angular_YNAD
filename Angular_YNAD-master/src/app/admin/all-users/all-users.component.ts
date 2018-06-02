import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})

@Injectable()
export class AllUsersComponent implements OnInit {
  users = [];

  constructor(private usersService: UserServiceService) {};

  ngOnInit() {
    this.usersService.displayAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      return data;
    });
  }

}