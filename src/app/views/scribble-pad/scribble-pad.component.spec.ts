import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribblePadComponent } from './scribble-pad.component';

describe('ScribblePadComponent', () => {
  let component: ScribblePadComponent;
  let fixture: ComponentFixture<ScribblePadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScribblePadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribblePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
