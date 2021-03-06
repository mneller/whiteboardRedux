import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {select, NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store";
import {DbService} from "../db/db.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailAdress: string;
  passcode: string;
  @select() readonly errorTxt$: Observable<string>;
  @select() readonly dbLoggedIn$: Observable<boolean>;

  constructor(private dbService: DbService, private router: Router, private store: NgRedux<IAppState>) {

    this.dbLoggedIn$.subscribe((x) => {
        //console.log ("x ===> " + x);
        if(x) {
          this.router.navigateByUrl('/whiteboard');
        }
    });


      /*this.fireAuthorization.authState.subscribe(auth => {
        if(auth) {
          this.router.navigateByUrl('/whiteboard');
        }
      });
      */
  }

  onSubmit(formData) {
    console.log("OnSubmit");
    this.dbService.dbLoginWithEmail(this.emailAdress, this.passcode);
  } // of onSubmit(formData).

    /*
    onSubmit(formData) {
      console.log("OnSubmit");
      if(formData.valid) {
        console.log(formData.value);
        this.fireAuthorization.auth.signInWithEmailAndPassword(
            this.emailAdress,
            this.passcode
        ).then(
          (success) => {
            console.log(success);
            this.store.dispatch(DbActions.userLogin(this.emailAdress));
            this.router.navigateByUrl('/whiteboard');
          }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
      }
    }
  */
  ngOnInit() {
  }

}
