import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErlcomePageComponent } from './erlcome-page.component';

describe('ErlcomePageComponent', () => {
  let component: ErlcomePageComponent;
  let fixture: ComponentFixture<ErlcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErlcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErlcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
