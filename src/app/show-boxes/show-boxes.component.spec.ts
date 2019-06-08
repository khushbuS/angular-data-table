import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBoxesComponent } from './show-boxes.component';

describe('ShowBoxesComponent', () => {
  let component: ShowBoxesComponent;
  let fixture: ComponentFixture<ShowBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
