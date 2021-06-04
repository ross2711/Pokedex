import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailActionsComponent } from './poke-detail-actions.component';

describe('PokeDetailActionsComponent', () => {
  let component: PokeDetailActionsComponent;
  let fixture: ComponentFixture<PokeDetailActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
