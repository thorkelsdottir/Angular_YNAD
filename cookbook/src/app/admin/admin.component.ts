import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // update with your regular way of checking whether the user is logged in

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
