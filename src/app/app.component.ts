import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primengproject3';

  constructor(private appService: AppService){}
  userList=[];
  selectedUser=[];
  ngOnInit(){
    this.getUsersList();
  }

  getUsersList(){
    this.appService.getUserList().subscribe(
      response => {
        this.userList=response;
      }
    );
  }
}
