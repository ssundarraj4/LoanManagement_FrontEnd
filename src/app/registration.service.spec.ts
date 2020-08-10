import { TestBed, async, inject, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
const user1 = [{
  "userId": "sundar", "password": "pass", "cpassword": "pass", "firstName": "sundarraj", "lastName": "subramani", "email": "ssundarraj4@gmail.com", "contact": "9876556789"
},
{
  "userId": "sreeja", "password": "pass", "cpassword": "pass", "firstName": "sreeja", "lastName": "pk", "email": "sreeja@gmal.com", "contact": "8908908900"

}];
describe('RegistrationService', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let service: RegistrationService;
  let mock = user1;

  beforeEach(() => {


    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [RegistrationService],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    service = TestBed.get(RegistrationService);
  });

  xit('should subscribe method is getting called', fakeAsync(() => {
    let regspy = spyOn(service, 'getUser').and.returnValues(of(mock));
    let subsby = spyOn(service.getUser('sundar'), 'subscribe');
    component.ngOnInit();
    tick();
    expect(regspy).toHaveBeenCalledBefore(subsby);
    expect(subsby).toHaveBeenCalled();
  }));

  it('should have a user count at least one', fakeAsync(() => {
    component.ngOnInit();
    expect(component.user).toBeDefined();
    fixture.detectChanges();
    expect(component.user.userId).toBeUndefined();
  }));
 
});


  // }); let req;
  // let userId = "admin";
  // it(`should fetch posts as an Observable`, async(inject([HttpTestingController, RegistrationService],
  //   (httpClient: HttpTestingController, Service: RegistrationService) => {


  //     let req = mock.expectOne('http://localhost:8091/userprofileservice/api/v1/user');
  //     expect(req.request.method).toBe("POST");

      // service.getUser('sundar').subscribe(data=>{
      //      expect(data.firstName).toEqual('sundarraj');

      // });
      // let req = mock.expectOne('http://localhost:8091/userprofileservice/api/v1/userprofile/sundar');
      // expect(req.request.method).toBe("GET");


    //   req.flush(user1);
    //   mock.verify();

    // })));

