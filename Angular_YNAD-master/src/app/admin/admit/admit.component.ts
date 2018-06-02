import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.scss']
})
export class AdmitComponent implements OnInit {
  admitPieceForm: FormGroup;
  pieceImageUrl = "http://placehold.it/180";
  constructor(private fb: FormBuilder, private router: Router, private crudService: CrudService, private authService: AuthService) { }

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
    if (admitPieceForm.valid) {
      //Save piece data via crudService      
      this.crudService.saveNewPiece(admitPieceForm.value)
      this.authService.login().subscribe(x => {
        // Navigate to the my-pieces
        this.router.navigate(['./admin/my-pieces']);
      });
      // console.log(this.admitPieceForm.value);
    } else {
      // Display error message
      console.log("Something went wrong in admitting a piece");
    }
   }


  ngOnInit() {
    this.admitPieceForm = this.fb.group({
      title: ['', Validators.required],
      material: [''],
      description: ['', Validators.required],
      size: [''],
      price: [''],
      year: [''],
      media: [''],
      piece_image: ['']
    });
  }

}






