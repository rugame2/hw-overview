import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphigherlevelComponent } from './maphigherlevel.component';

describe('MaphigherlevelComponent', () => {
  let component: MaphigherlevelComponent;
  let fixture: ComponentFixture<MaphigherlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaphigherlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphigherlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
