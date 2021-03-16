import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourScreenMainComponent } from './four-screen-main.component';

describe('FourScreenMainComponent', () => {
  let component: FourScreenMainComponent;
  let fixture: ComponentFixture<FourScreenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourScreenMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourScreenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
