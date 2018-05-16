import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../PasswordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  profileImageUrl = "/assets/icon/imagePlaceholder.jpg";

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  };

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.profileImageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }s

  signUpSubmit(signUpForm) {
    console.log("is Valid?: " + signUpForm.valid);
    if (signUpForm.valid) {
      //Save user data via userServiceService      
      // this.userService.saveNewUser(signUpForm.value)
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['admin']);
      });
      //console.log(this.signUpForm.value);
    } else {
      // Display error messages.
    }
    console.log("Hi there!");
   }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      phone_number: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      location: [''],
      profession: [''],
      description: [''],
      facebook_url: [''],
      instagram_url: [''],
      twitter_url: [''],
      profileimage: ['']
    });
  }

}

