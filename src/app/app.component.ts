import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  responses: any;

  constructor(
    private webService: WebService
  ) { }

  ngOnInit(){
    this.sendRequest();
  }

  sendRequest() {
    this.webService.getFiles("C:\\Users\\Alex\\Downloads").subscribe(
      responses=>{
        this.responses = responses;
      }
    )
  }

}
