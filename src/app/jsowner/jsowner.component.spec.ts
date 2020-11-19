import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsownerComponent } from './jsowner.component';

describe('JsownerComponent', () => {
  let component: JsownerComponent;
  let fixture: ComponentFixture<JsownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
