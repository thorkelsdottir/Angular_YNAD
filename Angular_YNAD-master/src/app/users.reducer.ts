import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';
import { PiecesServiceService } from './pieces-service.service';


const INITIAL_STATE: UsersState = PiecesServiceService.getInitialPieceState();

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {
 switch (action.type) {
   ///for getting all pieces
  case UsersActions.GET_ALL_PIECES:
  return state;
  case UsersActions.GET_ALL_PIECES_SUCCESS:
    // console.log(action.payload);
    let newState = {... state};
    newState.piece = action.payload;
    // console.log(newState);
    return tassign(state, newState);
  case UsersActions.GET_ALL_PIECES_ERROR:
    //console.log(action.payload);
    return state;

  //for deleting one piece
  case UsersActions.DELETE_PIECES:
  return state;
  case UsersActions.DELETE_PIECES_SUCCESS:
    // console.log(action.payload);
    let newDeletedState = [... state.piece];
    newDeletedState = newDeletedState.filter(x => x.idpieces !== action.payload);
    // newDeletedState.filter(x =>{
    //   if (x.idpieces !== action.payload) {
    //     return newDeletedState;
    //   }
    // })
    
    console.log(newDeletedState);
   
    // console.log(newDeletedState);
    return tassign(state, {piece: newDeletedState});
  case UsersActions.DELETE_PIECES_ERROR:
    //console.log(action.payload);
    return state;



    default:
    return state;
  }
}
