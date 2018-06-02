import { TestBed, async } from '@angular/core/testing';
import { FilterArrayPipe } from './filter.pipe';


describe('App: Users', () => {
  beforeEach(() => {
      // creating list of users
    this.users = [
        {_id: '1', firstname: 'Katrin'},
        {_id: '2', firstname: 'Birna'},
        {_id: '3', firstname: 'Anne'},
        {_id: '4', firstname: 'Jon'},
        {_id: '5', firstname: 'Christian'},
    ];
    // declarinf filter arry pipe
    TestBed.configureTestingModule({
      declarations: [
        FilterArrayPipe
      ],
    });
  });

    describe('FilterUsers', () => {
        // asigning the pipe to the FilterArrayPipe
      let pipe = new FilterArrayPipe();
      
      // checking if there are 5 users
      it('No search string returns input', () => {
          let result = pipe.transform(this.users, '');
          expect(result.length).toBe(5);
      });

      // returing an emtpy array and checking if its emtpy
      it('Empty array returns empty array', () => {
          let result = pipe.transform([]);
          expect(result.length).toBe(0);
      });
    });
});

///to do a unit test just make the command in the teminal: ng test