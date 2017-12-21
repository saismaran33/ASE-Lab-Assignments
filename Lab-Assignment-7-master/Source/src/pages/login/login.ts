import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') pwd;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  signin(){
    if(this.uname.value=="admin" && this.pwd.value=="admin")
    {
      let alert = this.alertCtrl.create({
        title: 'Login Sucess!',
        subTitle: 'Logged in sucessfully as admin !',
        buttons: ['OK']
      });
      alert.present();
    }

  }
  registers(){
    this.navCtrl.push(RegisterPage)
  }

}
