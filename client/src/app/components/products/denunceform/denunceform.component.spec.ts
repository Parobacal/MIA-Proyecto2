import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunceformComponent } from './denunceform.component';

describe('DenunceformComponent', () => {
  let component: DenunceformComponent;
  let fixture: ComponentFixture<DenunceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
