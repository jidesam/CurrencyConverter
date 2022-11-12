import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTableIiComponent } from './currency-table-ii.component';

describe('CurrencyTableIiComponent', () => {
  let component: CurrencyTableIiComponent;
  let fixture: ComponentFixture<CurrencyTableIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyTableIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyTableIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
