import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AOPSPortalService } from '../shared/services/portal.service';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

class AOPSPortalServiceMock {
  getPortalsUsingHTTP() {
    return Observable.of([{ id: 1, portalName: 'Jay Millare Portal', portalRoute: 'jaymillare' },
    { id: 2, portalName: 'Aldwin Sy', portalRoute: 'aldwinsy' }]);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ HomeComponent ],
      providers: [
        { provide: AOPSPortalService, useClass: AOPSPortalServiceMock },
        { provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to selected hero detail on click', fakeAsync(() => {
    const navSpy = routerSpy.navigate as jasmine.Spy;
    const portal = fixture.debugElement.query(By.css('#btn-jaymillare')).nativeElement;
    const event = new CustomEvent('click');
    portal.dispatchEvent(event);
    tick();
    // should have navigated
    expect(navSpy.calls.any()).toBe(true, 'navigate called');
    // composed portal route will be URL like '/aldwinsy'
    // expect link array with the route path and portal route
    // first argument to router.navigate is link array
    const navArgs = navSpy.calls.first().args[0];
    console.log(navSpy.calls.first().args);
    expect(navArgs[0]).toEqual('jaymillare');
  }));

});
