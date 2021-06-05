import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListHeaderComponent } from './poke-list-header.component';

describe('PokeListHeaderComponent', () => {
  let component: PokeListHeaderComponent;
  let fixture: ComponentFixture<PokeListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeListHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
