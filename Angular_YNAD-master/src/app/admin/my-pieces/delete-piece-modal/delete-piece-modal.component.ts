import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
// import { CrudService } from '../../../crud.service';
import { Subject } from 'rxjs/Subject';
import { PiecesActions } from '../../../pieces.actions';
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
  //passing in all the pieces data from parent component
  pieces = [];
  @Input() data: string;
  // @Output('getData') getData = new EventEmitter<string>();
  // saveData() {
  //   this.getData.emit(this.data)
  //   }
  constructor(public dialog: MatDialog, private piecesActions: PiecesActions, private ngRedux: NgRedux<IAppState>) {}

  openDialog(data): void {
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
    @Inject(MAT_DIALOG_DATA) public data: string, private piecesActions: PiecesActions) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePiece(idpieces) {
    // console.log(idpieces);
    this.piecesActions.deletePiece(idpieces);
    this.dialogRef.close();
  }
}

