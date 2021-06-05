import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListActionsComponent } from './poke-list-actions.component';

describe('PokeListActionsComponent', () => {
  let component: PokeListActionsComponent;
  let fixture: ComponentFixture<PokeListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeListActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
