import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoScreenComponent } from './two-screen.component';

describe('TwoScreenComponent', () => {
  let component: TwoScreenComponent;
  let fixture: ComponentFixture<TwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
