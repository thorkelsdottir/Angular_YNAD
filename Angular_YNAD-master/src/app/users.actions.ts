import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';

@Injectable()
export class UsersActions {
 
  constructor (
   private ngRedux: NgRedux<IAppState>) {}
   
   static GET_ALL_PIECES: String = 'GET_ALL_PIECES';
   static GET_ALL_PIECES_SUCCESS: String = 'GET_ALL_PIECES_SUCCESS';
   static GET_ALL_PIECES_ERROR: String = 'GET_ALL_PIECES_ERROR';

   static DELETE_PIECES: String = 'DELETE_PIECES';
   static DELETE_PIECES_SUCCESS: String = 'DELETE_PIECES_SUCCESS';
   static DELETE_PIECES_ERROR: String = 'DELETE_PIECES_ERROR';

   getAllPieces() {
    this.ngRedux.dispatch({
      type: UsersActions.GET_ALL_PIECES
    })
  }

  deletePiece(id) {
    this.ngRedux.dispatch({
      type: UsersActions.DELETE_PIECES,
      payload: id
    })
  }

}