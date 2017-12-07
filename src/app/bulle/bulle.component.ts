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
    score :number = 0;
	  bulles :any = [
       {
       	friend1 : 'Sami',
         messages : 50
       },
       {
       	friend1 : 'Anis',
         messages : 50
       },
       {
       	friend1 : 'Marwa',
         messages : 50
       },
       {
       	friend1 : 'Aymen',
         messages : 50
       },
       {
       	friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       },
       {
         friend1 : 'Sami',
         messages : 50
       },
       {
         friend1 : 'Anis',
         messages : 50
       },
       {
         friend1 : 'Marwa',
         messages : 50
       },
       {
         friend1 : 'Aymen',
         messages : 50
       },
       {
         friend1 : 'Souhir',
         messages : 50
       },
       {
         friend1 : 'Amine',
         messages : 50
       },
       {
         friend1 : 'Samir',
         messages : 50
       },
       {
         friend1 : 'Houda',
         messages : 50
       },
       {
         friend1 : 'Atef',
         messages : 50
       }
  	];

  timeOutRef;

  clickbulle(indexbulle) {
    console.log(this.bulles[indexbulle].messages);  
    this.score += this.bulles[indexbulle].messages;
    console.log(this.score);
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

          if (y >= this.bulles.length) {
            this.printscore();
            clearInterval(interval);
          }
        },400);
  }

  printscore(){
    console.log('ffffffff'+this.score);
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
