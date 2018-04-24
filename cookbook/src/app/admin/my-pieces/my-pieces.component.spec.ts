import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPiecesComponent } from './my-pieces.component';

describe('MyPiecesComponent', () => {
  let component: MyPiecesComponent;
  let fixture: ComponentFixture<MyPiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
