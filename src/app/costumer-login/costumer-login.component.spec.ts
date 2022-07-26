import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerLoginComponent } from './costumer-login.component';

describe('CostumerLoginComponent', () => {
  let component: CostumerLoginComponent;
  let fixture: ComponentFixture<CostumerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
