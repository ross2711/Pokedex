import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailContentComponent } from './poke-detail-content.component';

describe('PokeDetailContentComponent', () => {
  let component: PokeDetailContentComponent;
  let fixture: ComponentFixture<PokeDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
