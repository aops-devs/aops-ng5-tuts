import { JayMillarePortalService } from './../../../shared/services/jay-millare-portal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayTestComponent } from './jay-test.component';

class JayMillarePortalServiceMock {}

describe('JayTestComponent', () => {
  let component: JayTestComponent;
  let fixture: ComponentFixture<JayTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayTestComponent ],
      providers: [
        { provide: JayMillarePortalService, useClass: JayMillarePortalServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
