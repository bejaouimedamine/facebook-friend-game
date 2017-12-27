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
	  bulles :any = [];
    friends :any = [];

    clickedbulle : boolean[] = [];

  timeOutRef;

  clickbulle(indexbulle) {
    if( !this.clickedbulle[indexbulle]) {
      this.clickedbulle[indexbulle] = true;
      this.score += this.bulles[indexbulle].likes;
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
      version: 'v2.11'
    };
    fb.init(initParams);
  }

  ngOnInit() { 
  }

  loginWithFacebook(): void {

    var profilealbumid = '';
 
    this.fb.login({
      scope: 'user_friends,user_photos',
      auth_type: 'rerequest'
    })
      .then((response: LoginResponse) => {
        this.fb.api('me?fields=id,name,picture')
          .then(res => {
            this.fb.api('me/albums?fields=id,name')
              .then(res => {
                profilealbumid = res.data[0].id;
                this.fb.api('/'+profilealbumid+'/photos')
                  .then(res => {
                    var pics;
                    for ( pics = 0; pics<res.data.length; pics++ ) {
                      this.fb.api('/'+res.data[pics].id+'/likes?limit=15000')
                      .then(res => {
                        var exist;
                        for (var i=0; i < res.data.length; i++){
                          exist = false;
                          for (var j=0; j < this.friends.length; j++){
                            if (res.data[i].id == this.friends[j].id) {
                              exist = true;
                              this.friends[j].likes++;
                            }
                          }
                          if (!exist) {
                            this.friends.push({id : res.data[i].id, name : res.data[i].name, likes : 1});
                          }
                        }
                      })
                      .catch(e => console.log(e));
                    }
                    this.fb.api('/me/taggable_friends?limit=5000&fields=id,name,picture.type(large)')
                    .then(res => {
                      for (var i=0; i < res.data.length; i++){
                        this.bulles.push({});
                        this.bulles[i].id = res.data[i].id;
                        this.bulles[i].name = res.data[i].name;
                        this.bulles[i].image = res.data[i].picture.data.url;
                        var liked;
                        for (var j=0; j < this.friends.length; j++){
                          liked = false;
                          if (this.bulles[i].name == this.friends[j].name) {
                            liked = true;
                            this.bulles[i].likes = this.friends[j].likes;
                            break;
                          }
                        }
                        if (!liked) {
                          this.bulles[i].likes = 1;
                        }
                      }
                      console.log('kk');
                      console.log(this.bulles);
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
                    .catch(e => console.log(e));
                  })
                  .catch(e => console.log(e));
              })
              .catch(e => console.log(e));
          })
          .catch(e => console.log(e));
      })
      .catch((error: any) => console.error(error));
 
  }

}
