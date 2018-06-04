import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { piecesReducer } from './../pieces.reducer';


export class PiecesState {
    piece: any[];
}
export class IAppState {
 pieces?: PiecesState;
}

export const rootReducer = combineReducers<IAppState>({
pieces: piecesReducer,
 // when you add more reducers, add them here..
 router: routerReducer
});