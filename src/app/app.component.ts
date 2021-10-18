import { AccountService } from 'src/app/services/account/account-service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-todo-list';
  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accountService.getCurrentUserFromLocalStorage();
  }
}
