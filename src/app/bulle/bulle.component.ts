import { Component, OnInit,animate, style, state, transition, trigger } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

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

    clickedbulle : boolean[] = [];

  timeOutRef;

  clickbulle(indexbulle) {
    if( !this.clickedbulle[indexbulle]) {
      this.clickedbulle[indexbulle] = true;
      this.score += this.bulles[indexbulle].messages;
    }
  }

  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    target.style.opacity = 0.5; 
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
    document.getElementById("openModalButton").click();
  }

  constructor(private fb: FacebookService) {
 
    let initParams: InitParams = {
      appId: '592341600869500',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
 
  }

  ngOnInit() {
    this.loginWithFacebook(); 
  }

  loginWithFacebook(): void {
 
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log(response);
        this.fb.api('me?fields=id,name,picture')
          .then(res => console.log(res))
          .catch(e => console.log(e));
        this.fb.api('/me/friendlists')
          .then(res => console.log(res))
          .catch(e => console.log(e));
        this.score = 0;
        for(var el = 0; el < document.getElementsByClassName("avatar").length; el++ ){
          let ele = <HTMLElement>document.getElementsByClassName("avatar")[el];
          ele.style.opacity = "1";
        }
        for (var index = 0; index < this.bulles.length - 1; index++) {
          this.clickedbulle.push(false);
        }

        for (var i = 0; i <= this.bulles.length - 1; i+=4) {
           for (var j = 0; (j <= 3 && i+j <= this.bulles.length -1); j++) {
             this.bulles[j+i].position = (25 * (j+1)) + '%';
             this.bulles[j+i].state = 'top';
           }
        }
        this.dropDownBulles();
      })
      .catch((error: any) => console.error(error));
 
  }

}
