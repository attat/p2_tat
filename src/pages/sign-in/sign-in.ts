import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPage } from '../display/display';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  private myStyles: Object = {showUsername: false};

  constructor(public navCtrl: NavController) {
  }
  onGoToDisplay(){
    this.navCtrl.push(DisplayPage);
  }

}
