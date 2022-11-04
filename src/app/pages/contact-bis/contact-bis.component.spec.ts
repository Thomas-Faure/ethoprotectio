import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBisComponent } from './contact-bis.component';

describe('ContactBisComponent', () => {
  let component: ContactBisComponent;
  let fixture: ComponentFixture<ContactBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
