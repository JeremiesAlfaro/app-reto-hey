import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuSaludFinancieraComponent } from './tu-salud-financiera.component';

describe('TuSaludFinancieraComponent', () => {
  let component: TuSaludFinancieraComponent;
  let fixture: ComponentFixture<TuSaludFinancieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuSaludFinancieraComponent]
    });
    fixture = TestBed.createComponent(TuSaludFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
