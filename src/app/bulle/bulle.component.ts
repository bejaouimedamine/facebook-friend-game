import { Component, OnInit,animate, style, state, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-bulle',
  templateUrl: './bulle.component.html',
  styleUrls: ['./bulle.component.css'],
  animations: [
    trigger("move", [
      state("topRight", style({left: "calc(100% - 128px)", top: 0})),
      state("bottomLeft", style({left: 0, top: "calc(100% - 128px)"})),
      transition("topRight <=> bottomLeft", animate( "300ms ease-in ease-out" )),
    ])
  ],
})
export class BulleComponent implements OnInit {
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

  state = 'topRight';
  timeOutRef;

  moveCat() {
      this.state = this.state === 'topRight' ? 'bottomLeft' : 'topRight';
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
