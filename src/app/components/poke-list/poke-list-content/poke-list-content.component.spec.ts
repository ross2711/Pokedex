import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListContentComponent } from './poke-list-content.component';

describe('PokeListContentComponent', () => {
  let component: PokeListContentComponent;
  let fixture: ComponentFixture<PokeListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeListContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
