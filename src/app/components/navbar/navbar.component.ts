import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountService } from 'src/app/services/account-service/account-service.service';
@Component({
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
