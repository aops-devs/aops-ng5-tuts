import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayMillarePortalComponent } from './jay-millare-portal.component';

describe('JayMillarePortalComponent', () => {
  let component: JayMillarePortalComponent;
  let fixture: ComponentFixture<JayMillarePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayMillarePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayMillarePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
