import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CrudService } from '../../../crud.service';
import { PiecesServiceService } from '../../../pieces-service.service';
import { Subject } from 'rxjs/Subject';
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
  constructor(public dialog: MatDialog, private pieceservice: PiecesServiceService) {}

  openDialog(data): void {
    // console.log('x');
    let dialogRef = this.dialog.open(ModalOverlay, {
      width: '250px',
      data: data
    });
  }
  ngOnInit() {
    // console.log(this.data);
        this.pieceservice.displayAllPieces().subscribe(data => {
          this.pieces  = data;
        return data;
      });
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
    @Inject(MAT_DIALOG_DATA) public data: any,  private crudservice: CrudService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePiece(idpieces) {
    console.log(idpieces);
    this.crudservice.deletePiece(idpieces).subscribe(res => {
    });
  }
}

