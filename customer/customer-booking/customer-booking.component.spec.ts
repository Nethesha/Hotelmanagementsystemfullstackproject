import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingComponent } from './customer-booking.component';

describe('CustomerBookingComponent', () => {
  let component: CustomerBookingComponent;
  let fixture: ComponentFixture<CustomerBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBookingComponent]
    });
    fixture = TestBed.createComponent(CustomerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
