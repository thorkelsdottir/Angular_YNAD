import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.scss']
})
export class AdmitComponent implements OnInit {
  admitPieceForm: FormGroup;
  pieceImageUrl = "http://placehold.it/180";
  constructor(private fb: FormBuilder, private router: Router) { }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.pieceImageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  admitPieceSubmit(admitPieceForm) {
    console.log("is Valid?: " + admitPieceForm.valid);
    this.router.navigate(['./admin/my-pieces']);
   }

  ngOnInit() {
    this.admitPieceForm = this.fb.group({
      piecetitle: ['', Validators.required],
      yearmade: ['', Validators.required],
      mediaused: ['', Validators.required],
      material: ['', Validators.required],
      piecesize: ['', Validators.required],
      piecedescription: ['', Validators.required],
      pieceSinglePrice: ['', Validators.required],
      pieceRentPrice: [''],
      pieceRentNumberOfMonths: [''],
      pieceimage: ['']
    });
  }

}






