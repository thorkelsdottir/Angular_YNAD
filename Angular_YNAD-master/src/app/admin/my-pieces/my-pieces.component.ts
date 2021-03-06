import { Component, OnInit } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';
// import { CrudService } from '../../crud.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PiecesActions } from '../../pieces.actions';
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
  data = '';
	
  constructor(private piecesAction: PiecesActions, private ngRedux: NgRedux<IAppState>, public dialog: MatDialog, private router: Router) { }

  //for the input
  saveData(data) {
  this.data = data;
    }	

  ngOnInit() {
    this.piecesAction.getAllPieces();
    this.subscription = this.ngRedux.select(state => state.pieces).subscribe(pieces => {
      // console.log(piece);
      this.pieces = pieces.piece;
      // console.log(this.pieces);
    })
  }


}
