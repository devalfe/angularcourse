import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersData = ['Rama', 'Krishna', 'Leela'];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  onCategoriesClick() {
    //perform some logic
    //navigate to page

    this.router.navigate(['/categories']);
  }

  onUserAddedClick() {
    this.userService.addUser();
  }
}
