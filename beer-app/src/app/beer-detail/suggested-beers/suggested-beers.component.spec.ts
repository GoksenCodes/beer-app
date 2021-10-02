import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedBeersComponent } from './suggested-beers.component';

describe('SuggestedBeersComponent', () => {
  let component: SuggestedBeersComponent;
  let fixture: ComponentFixture<SuggestedBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
