import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../crud.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  // @Input() data:  any;

  editUserForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private crudService: CrudService, private authService: AuthService) { }

   editUser(editUserForm) {
    console.log("is Valid?: " + editUserForm.valid);
    if (editUserForm.valid) {
      //Save user data via userServiceService      
      this.crudService.editUser(editUserForm.value)
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.router.navigate(['/admin/my-profile']);
      console.log(this.editUserForm.value);
    } else {
      // Display error messages.
    }
   }

  ngOnInit() {
    this.editUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone_number: [''],
      description: ['']
    });
    // console.log(this.userdata);
    
  }
}

