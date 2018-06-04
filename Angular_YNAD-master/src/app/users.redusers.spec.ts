var deepFreeze = require('deep-freeze');
import * as types from './users.actions';
import { UsersActions } from './users.actions';

describe('users reducer', () => {
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
        // perform a deepFreeze on the initial state object
        deepFreeze(initialState);
        //console.log(initialState);
        // create the piece payload
        // Send the action to the reducer
        //const afterState = {... initialState};
        //let afterState = [2]
        // Verify the changes are correct
        //expect( usersReducer(afterState, { type: types.UsersActions.GET_ALL_PIECES_SUCCESS})).toEqual({payload: true});
      });
});

// from babysitter app
// var deepFreeze = require('deep-freeze');
// import { usersReducer } from './users.reducer';
// import * as types from './users.actions';

// describe('users reducer', () => {
//     it('should return the initial state', () => {
//     expect(usersReducer(undefined, {})).toEqual({isBaby: undefined});
//     });
//     it('Toggle isBaby or sitter', () => {
//     let state = {isBaby: undefined};
//     deepFreeze(state);
//     expect( usersReducer(state, { type: types.UsersActions.SET_TYPE, payload: true })).toEqual({isBaby: true});
//     });
// });
