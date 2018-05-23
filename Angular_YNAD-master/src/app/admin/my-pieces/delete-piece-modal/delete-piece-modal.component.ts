import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CrudService } from '../../../crud.service';
import { PiecesServiceService } from '../../../pieces-service.service';
import { Subject } from 'rxjs/Subject';
import { UsersActions } from '../../../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../store/store';
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-delete-piece-modal',
  templateUrl: './delete-piece-modal.component.html',
  styleUrls: ['./delete-piece-modal.component.scss']
})
export class DeletePieceModalComponent {
  @Input() data: any;
  pieces = [];
  constructor(public dialog: MatDialog, private pieceservice: PiecesServiceService, private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) {}

  openDialog(data): void {
    // console.log('x');
    let dialogRef = this.dialog.open(ModalOverlay, {
      width: '250px',
      data: data
    });
  }
  ngOnInit() {
    }
}
@Component({
  selector: 'modal-overlay',
  templateUrl: 'modal-overlay.html',
  styleUrls: ['./delete-piece-modal.component.scss']
})

export class ModalOverlay {
  constructor(
    public dialogRef: MatDialogRef<ModalOverlay>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private crudservice: CrudService, private usersActions: UsersActions) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  deletePiece(idpieces) {
    console.log(idpieces);
    this.usersActions.deletePiece(idpieces);
    this.dialogRef.close();
  }
}

