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

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

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
