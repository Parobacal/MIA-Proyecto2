import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunceComponent } from './denunce.component';

describe('DenunceComponent', () => {
  let component: DenunceComponent;
  let fixture: ComponentFixture<DenunceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
