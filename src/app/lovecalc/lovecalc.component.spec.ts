import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovecalcComponent } from './lovecalc.component';

describe('LovecalcComponent', () => {
  let component: LovecalcComponent;
  let fixture: ComponentFixture<LovecalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovecalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
