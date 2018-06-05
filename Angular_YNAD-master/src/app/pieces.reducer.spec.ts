var deepFreeze = require('deep-freeze');
import { PiecesActions } from './pieces.actions';
import * as types from './pieces.actions';
import { piecesReducer } from './pieces.reducer';


describe('pieces reducer', () => {
    it('should display the state of all the pieces', () => {
        // create the initial state object
        const initialState = {
            idpieces: 1,
            title: 'Piece Titile',
            material: 'painting',
            description: 'Some description of the piece',
            size: '23 x 34 cm',
            price: '866$',
            status_idstatus: 1,
            year_idyear: 4,
            piece_image: 'url..',
            users_idusers: 5,
            media_idmedia: 6 
        }
        // const action = {type: types.GET_ALL_PIECES, todo: {

        // }}
        // perform a deepFreeze on the initial state object
        deepFreeze(initialState);
        //console.log(initialState);
        // create the piece payload
        // Send the action to the reducer
        // let payload = piecesReducer(state: PiecesState = INITIAL_STATE, action: any)
        // let afterState = {... initialState};
        // Verify the changes are correct
        //expect( usersReducer(afterState, { type: types.UsersActions.GET_ALL_PIECES_SUCCESS})).toEqual({payload: true});
      });
});
