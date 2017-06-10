import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
