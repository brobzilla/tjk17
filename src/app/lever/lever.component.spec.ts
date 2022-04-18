import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverComponent } from './lever.component';

describe('LeverComponent', () => {
  let component: LeverComponent;
  let fixture: ComponentFixture<LeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
