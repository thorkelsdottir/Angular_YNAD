import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthService } from "./auth.service";
import { PiecesActions } from "./pieces.actions";
import { ActionsObservable } from "redux-observable";
import { CrudService } from "./crud.service";

@Injectable()
export class PiecesEpic { 
  constructor(private crudservice: CrudService ) { }

///getting all pieces
  getAllPieces = (action$: ActionsObservable<any>) => {
    // console.log("this is reading the epic getAllPieces");
    return action$.ofType(PiecesActions.GET_ALL_PIECES).mergeMap(({ payload }) => {
        return this.crudservice.displayAllPieces().map((result: any[]) => ({
            type: PiecesActions.GET_ALL_PIECES_SUCCESS,
            payload: result
          })).catch(error => Observable.of({
            type: PiecesActions.GET_ALL_PIECES_ERROR,
            payload: error
          }));
      });
  }

///deleting from pieces
  deleteFromPieces = (action$: ActionsObservable<any>) => {
    return action$.ofType(PiecesActions.DELETE_PIECES).mergeMap(({ payload }) => {
      // console.log(payload); 
        return this.crudservice.deletePiece(payload).map((result) => ({
            type: PiecesActions.DELETE_PIECES_SUCCESS,
            payload: payload
          })).catch(error => Observable.of({
            type: PiecesActions.DELETE_PIECES_ERROR,
            payload: error
          }));
      });
  }

}