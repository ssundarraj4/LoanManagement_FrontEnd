import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  status1: boolean = false;


  constructor(private router:Router) {
    if (sessionStorage.getItem('userId') === "admin" || sessionStorage.getItem('userId') === "test") {
      this.status = true;

    } else {
      this.status1 = true;

    }

  }
  onClick(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
  this.router.navigate(['header']);
  }


  ngOnInit(): void {
  }

}
