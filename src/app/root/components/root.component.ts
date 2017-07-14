import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private router: Router){

  }

  ngOnInit():void{
    //TODO: need to handle NavigationError or what happens if navigation is not successful???
    this.router.events.subscribe(event => {
      let e = Object.assign({ "url": "" }, event);
      if (event.constructor.name === "NavigationStart") {
        let curr = localStorage.getItem('currentRoute');
        localStorage.setItem('previousRoute', curr);
        localStorage.setItem('currentRoute', e.url);
      }
    });    

  }
}
