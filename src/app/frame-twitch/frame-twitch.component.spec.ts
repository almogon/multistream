import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTwitchComponent } from './frame-twitch.component';

describe('FrameTwitchComponent', () => {
  let component: FrameTwitchComponent;
  let fixture: ComponentFixture<FrameTwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
