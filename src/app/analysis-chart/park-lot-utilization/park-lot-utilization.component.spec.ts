import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkLotUtilizationComponent } from './park-lot-utilization.component';

describe('ParkLotUtilizationComponent', () => {
  let component: ParkLotUtilizationComponent;
  let fixture: ComponentFixture<ParkLotUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkLotUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkLotUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
