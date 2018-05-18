import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { JayMillarePortalService } from './../../shared/services/jay-millare-portal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JayMillarePortalComponent } from './jay-millare-portal.component';

class ActivatedRouteMock {}
class JayMillarePortalServiceMock {}

describe('JayMillarePortalComponent', () => {
  let component: JayMillarePortalComponent;
  let fixture: ComponentFixture<JayMillarePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ JayMillarePortalComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: JayMillarePortalService, useClass: JayMillarePortalServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayMillarePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
