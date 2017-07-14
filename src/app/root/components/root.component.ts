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
        //console.log("MAIN component route event NavigationStart", event);
        let curr = localStorage.getItem('currentRoute');
        //console.log('MAIN component route event curr now prev', curr);
        localStorage.setItem('previousRoute', curr);
        localStorage.setItem('currentRoute', e.url);
        //console.log('MAIN component route event curr', e.url);

      }
      // else if (event.constructor.name === "NavigationEnd") {
      //   // do something...
      //   //console.log("MAIN component route event NavigationEnd", event);
      //   let curr = localStorage.getItem('currentRoute');
      //   //console.log('MAIN component route event curr now prev',curr);
      //   localStorage.setItem('previousRoute', curr);
      //   localStorage.setItem('currentRoute',e.url);
      //   //console.log('MAIN component route event curr', e.url);
      // }

    });    
    // this.router.events.filter((evt: Event) => evt instanceof NavigationEnd)
    // .map((ev: any) => ev.url)
    // .subscribe(url => { console.log('Router Link End @ ', url); });


  }
}
