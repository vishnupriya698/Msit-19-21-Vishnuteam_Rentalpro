import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userDetails;
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/user/login']);
  }

  getUserProfile() {
    if(this.userService.isLoggedIn()) {
      this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
      }
    )
    }
  }

}
