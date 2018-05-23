import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthService } from "./auth.service";
import { UsersActions } from "./users.actions";
import { PiecesServiceService } from "./pieces-service.service";
import { ActionsObservable } from "redux-observable";
import { CrudService } from "./crud.service";

@Injectable()
export class UsersEpic { 
  constructor(private piecesService: PiecesServiceService, private crudservice: CrudService ) { }

///getting all pieces
  getAllPieces = (action$: ActionsObservable<any>) => {
    // console.log("this is reading the epic getAllPieces");
    return action$.ofType(UsersActions.GET_ALL_PIECES).mergeMap(({ payload }) => {
        return this.piecesService.displayAllPieces().map((result: any[]) => ({
            type: UsersActions.GET_ALL_PIECES_SUCCESS,
            payload: result
          })).catch(error => Observable.of({
            type: UsersActions.GET_ALL_PIECES_ERROR,
            payload: error
          }));
      });
  }

///deleting from pieces
  deleteFromPieces = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.DELETE_PIECES).mergeMap(({ payload }) => {
      // console.log(payload); 
        return this.crudservice.deletePiece(payload).map((result) => ({
            type: UsersActions.DELETE_PIECES_SUCCESS,
            payload: payload
          })).catch(error => Observable.of({
            type: UsersActions.DELETE_PIECES_ERROR,
            payload: error
          }));
      });
  }

}