import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newsletterForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  newsLetterSubmit(newsletterForm) {
    console.log("mail: ", newsletterForm.value);
  }

  ngOnInit() {
    // Subscribe to newsletter
    this.newsletterForm = this.fb.group({
      newsLetterMail: ['']
    });
  }

}
