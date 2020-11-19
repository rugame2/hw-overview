import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPromisesComponent } from './js-promises.component';

describe('JsPromisesComponent', () => {
  let component: JsPromisesComponent;
  let fixture: ComponentFixture<JsPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsPromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
