import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformModelFunctionltyComponent } from './ngform-model-functionlty.component';

describe('NgformModelFunctionltyComponent', () => {
  let component: NgformModelFunctionltyComponent;
  let fixture: ComponentFixture<NgformModelFunctionltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgformModelFunctionltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformModelFunctionltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
