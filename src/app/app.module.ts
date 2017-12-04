import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BulleComponent } from './bulle/bulle.component';
import { RouterModule, Routes } from '@angular/router';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

const appRoutes: Routes = [
  {
    path: 'bulle',
    component: BulleComponent,
    data: { title: 'Bulle componenet route' }
  },
  { 
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BulleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#35C482",
      innerStrokeColor: "#000000",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }