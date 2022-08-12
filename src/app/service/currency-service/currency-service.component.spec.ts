import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyServiceComponent } from './currency-service.component';

describe('CurrencyServiceComponent', () => {
  let component: CurrencyServiceComponent;
  let fixture: ComponentFixture<CurrencyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
