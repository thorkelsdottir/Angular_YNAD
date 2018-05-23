import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../PasswordValidator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  loginForm: FormGroup;
    
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  };

  loginSubmit(loginForm) {
    // console.log("is Valid?: " + loginForm.valid);

    if (loginForm.valid) {
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['admin']);
      });
      
    } else {
      // Display error messages.
    }
    // console.log("Hi there!");
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', 
      Validators.compose([
        Validators.required,
        PasswordValidator.getPasswordValidator()
       ]
      )]
    });
  }

}
