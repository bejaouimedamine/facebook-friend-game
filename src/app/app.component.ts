import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works from main!';
  bulles :any = [
       {
       	friend1 : 'Sami'
       },
       {
       	friend1 : 'Anis'
       },
       {
       	friend1 : 'Marwa'
       },
       {
       	friend1 : 'Aymen'
       },
       {
       	friend1 : 'Souhir'
       },
  	];
}
