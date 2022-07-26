import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMyAdvtComponent } from './submit-my-advt.component';

describe('SubmitMyAdvtComponent', () => {
  let component: SubmitMyAdvtComponent;
  let fixture: ComponentFixture<SubmitMyAdvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitMyAdvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitMyAdvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
