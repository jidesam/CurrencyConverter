import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatePageComponent } from './currency-rate-page.component';

describe('CurrencyRatePageComponent', () => {
  let component: CurrencyRatePageComponent;
  let fixture: ComponentFixture<CurrencyRatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyRatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
