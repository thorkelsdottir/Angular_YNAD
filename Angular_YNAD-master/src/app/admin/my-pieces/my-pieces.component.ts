import { Component, OnInit } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PiecesServiceService } from '../../pieces-service.service';
import { CrudService } from '../../crud.service';
import { SearchService } from '../../search.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UsersActions } from '../../users.actions';
import { Subscription } from 'rxjs';
import { IAppState } from '../../store/store';
import { NgRedux } from '@angular-redux/store';


@Component({
  selector: 'app-my-pieces',
  templateUrl: './my-pieces.component.html',
  styleUrls: ['./my-pieces.component.scss'],
})
export class MyPiecesComponent implements OnInit {

  subscription: Subscription;
  pieces: any[];
  constructor(private usersAction: UsersActions, private ngRedux: NgRedux<IAppState>, public dialog: MatDialog, private router: Router, private pieceservice: PiecesServiceService, private crudservice: CrudService, private searchService: SearchService, private modalService: NgbModal ) { }

  ngOnInit() {
    this.usersAction.getAllPieces();
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      // console.log(piece);
      this.pieces = users.piece;
      console.log(this.pieces);
      
    })
  }


}
