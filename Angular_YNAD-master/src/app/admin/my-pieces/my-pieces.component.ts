import { Component, OnInit } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PiecesServiceService } from '../../pieces-service.service';
import { CrudService } from '../../crud.service';
import { SearchService } from '../../search.service';
import { Subject } from 'rxjs/Subject';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-pieces',
  templateUrl: './my-pieces.component.html',
  styleUrls: ['./my-pieces.component.scss'],
})
export class MyPiecesComponent implements OnInit {

  pieces = [];
  results: Object;
  searchTerm$ = new Subject<string>();
  closeResult: string;

  
  constructor(private router: Router, private pieceservice: PiecesServiceService, private crudservice: CrudService, private searchService: SearchService, private modalService: NgbModal ) { }


  deletePiece(idpieces) {
    this.crudservice.deletePiece(idpieces).subscribe(res => {
    });
    // this.router.navigate(['/admin/my-pieces']);
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
    });
  }
  
  ngOnInit() {
    this.pieceservice.displayAllPieces().subscribe(data => {
       this.pieces  = data;
      return data;
    });
  }


}
