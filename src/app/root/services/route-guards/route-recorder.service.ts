import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable() // do not forget to register this class as a provider
export class PreviousRouteRecorder implements CanDeactivate<any> {
    constructor(private router: Router) {
    }
    canDeactivate(component: any): Observable<boolean> | boolean {
        console.log("HI FROM PreviousRouteRecorder");
        localStorage.setItem('previousRoute', this.router.url);
        return true;
    }
}


// @Injectable() // do not forget to register this class as a provider
// export class ActivatedRouteRecorder implements CanActivate {
//     constructor(private router: Router, private route: ActivatedRoute) {
//     }
//     canActivate(component: any): Observable<boolean> | boolean {
//         //console.log("HI FROM ActivatedRouteRecorder", this.route);
//         console.log("HI FROM Router", this.router.url);
//         localStorage.setItem('activatedRoute', this.router.url);
//         return true;
//     }
// }