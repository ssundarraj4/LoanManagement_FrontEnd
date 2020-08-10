import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User;
  sub:Subscription;
  constructor(private regService: RegistrationService) { }

  ngOnInit() {
    this.user = new User();
    this.userId = sessionStorage.getItem('userId');

   this.sub= this.regService.getUser(this.userId).subscribe(data => {
      this.user = data;
      
    });

  }
  updateUser() {
    this.regService.updateUser(this.userId, this.user).subscribe(data => console.log(data));
   
  }
  onSubmit(){
    this.updateUser();
  }
}
