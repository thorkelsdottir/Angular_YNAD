import { PiecesActions } from './pieces.actions';
import { PiecesState } from './store/store';
import { tassign } from 'tassign';
import { CrudService } from './crud.service';


const INITIAL_STATE: PiecesState = CrudService.getInitialPieceState();

export function piecesReducer(state: PiecesState = INITIAL_STATE, action: any) {
 switch (action.type) {
   ///for getting all pieces
  case PiecesActions.GET_ALL_PIECES:
  return state;
  case PiecesActions.GET_ALL_PIECES_SUCCESS:
    // console.log(action.payload);
    let newState = {... state};
    newState.piece = action.payload;
    // console.log(newState);
    return tassign(state, newState);
  case PiecesActions.GET_ALL_PIECES_ERROR:
    //console.log(action.payload);
    return state;

  //for deleting one piece
  case PiecesActions.DELETE_PIECES:
  return state;
  case PiecesActions.DELETE_PIECES_SUCCESS:
    // console.log(action.payload);
    let newDeletedState = [... state.piece];
    newDeletedState = newDeletedState.filter(x => x.idpieces !== action.payload);
    // newDeletedState.filter(x =>{
    //   if (x.idpieces !== action.payload) {
    //     return newDeletedState;
    //   }
    // })
    // console.log(newDeletedState);
    return tassign(state, {piece: newDeletedState});
  case PiecesActions.DELETE_PIECES_ERROR:
    //console.log(action.payload);
    return state;

    
    default:
    return state;
  }
}
