import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  status: boolean = false;
  status1: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    if (sessionStorage.getItem('userId') !=null || sessionStorage.getItem('userId') === "") {
      this.status = true;

    } else {
      this.status1 = true;
      
    }

  }



  onLogout() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
   // this.router.navigate(['header']);
    window.location.reload();
  }


}
