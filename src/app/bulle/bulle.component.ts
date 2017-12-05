import { Component, OnInit,animate, style, state, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-bulle',
  templateUrl: './bulle.component.html',
  styleUrls: ['./bulle.component.css'],
  animations: [
    trigger("move", [
      state("top", style({top: 0})),
      state("bottom", style({top: "calc(100% - 128px)"})),
      transition("top => bottom", animate( "1000ms ease-in ease-out" )),
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       },
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
       {
         friend1 : 'Amine'
       },
       {
         friend1 : 'Samir'
       },
       {
         friend1 : 'Houda'
       },
       {
         friend1 : 'Atef'
       }
  	];

  timeOutRef;

  clickbulle(indexbulle) {
    console.log(indexbulle);       
  }

  dropDownBulles(){
        var x:number = 0;
        var interval = setInterval(() => {  
        
          for (var y = x; y < x+4; y++) {
            if (y > (this.bulles.length - 1)) {
              x = (-4);
            }
            else {
              this.bulles[y].state = 'bottom';
            }
          }

          x+=4;

        },400);
  }

  constructor() { 
  }

  ngOnInit() {
    for (var i = 0; i <= this.bulles.length - 1; i+=4) {
       for (var j = 0; (j <= 3 && i+j <= this.bulles.length -1); j++) {
         this.bulles[j+i].position = (25 * (j+1)) + '%';
         this.bulles[j+i].state = 'top';
       }
    }
    this.dropDownBulles(); 
  }

}
