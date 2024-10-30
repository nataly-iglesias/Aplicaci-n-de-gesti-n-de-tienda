import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazprincipalPage } from './interfazprincipal.page';

describe('InterfazprincipalPage', () => {
  let component: InterfazprincipalPage;
  let fixture: ComponentFixture<InterfazprincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
