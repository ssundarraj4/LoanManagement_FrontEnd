import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User;
  constructor(private regService: RegistrationService) { }

  ngOnInit() {
    this.user = new User();
    this.userId = sessionStorage.getItem('userId');

    this.regService.getUser(this.userId).subscribe(data => {
      this.user = data;
      console.log("1111111111111111111111111"+this.user);

    });

  }
  updateUser() {
    this.regService.updateUser(this.userId, this.user).subscribe(data => console.log(data));
   
  }
  onSubmit(){
    this.updateUser();
  }
}
