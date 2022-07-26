import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMyEnquiryComponent } from './submit-my-enquiry.component';

describe('SubmitMyEnquiryComponent', () => {
  let component: SubmitMyEnquiryComponent;
  let fixture: ComponentFixture<SubmitMyEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitMyEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitMyEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
