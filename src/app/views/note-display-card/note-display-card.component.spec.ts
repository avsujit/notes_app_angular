import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDisplayCardComponent } from './note-display-card.component';

describe('NoteDisplayCardComponent', () => {
  let component: NoteDisplayCardComponent;
  let fixture: ComponentFixture<NoteDisplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
