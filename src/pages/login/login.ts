import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage() colocar ou tirar caso dÊ algum erro fudido
//Aparentemente com o ionic page não dá resultado
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pushPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = TabsPage;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  autenticar(){
    //inserir lógica aqui dentro
    
  }
}
