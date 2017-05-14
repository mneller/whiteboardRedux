/**
 * Created by eller on 13.05.17.
 */
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private fireAuthorization: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return Observable.from(this.fireAuthorization.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
          (!authenticated) this.router.navigate([ '/login' ]);
      });
  } // of canActivate().

} // of class AuthGuard.
