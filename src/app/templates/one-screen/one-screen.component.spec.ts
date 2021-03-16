import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneScreenComponent } from './one-screen.component';

describe('OneScreenComponent', () => {
  let component: OneScreenComponent;
  let fixture: ComponentFixture<OneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
