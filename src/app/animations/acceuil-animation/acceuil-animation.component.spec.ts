import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAnimationComponent } from './acceuil-animation.component';

describe('AcceuilAnimationComponent', () => {
  let component: AcceuilAnimationComponent;
  let fixture: ComponentFixture<AcceuilAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
