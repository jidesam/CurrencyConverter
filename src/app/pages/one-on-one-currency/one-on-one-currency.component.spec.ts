import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOnOneCurrencyComponent } from './one-on-one-currency.component';

describe('OneOnOneCurrencyComponent', () => {
  let component: OneOnOneCurrencyComponent;
  let fixture: ComponentFixture<OneOnOneCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOnOneCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOnOneCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
