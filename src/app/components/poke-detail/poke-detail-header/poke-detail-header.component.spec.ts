import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailHeaderComponent } from './poke-detail-header.component';

describe('PokeDetailHeaderComponent', () => {
  let component: PokeDetailHeaderComponent;
  let fixture: ComponentFixture<PokeDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
