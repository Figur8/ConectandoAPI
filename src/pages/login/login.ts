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
  params: Object;
  iden: String;
  teste: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params =  {id:  this.teste};
    this.navCtrl.push(HomePage, {
        data: this.teste,
    });
  }
  
  testando(teste){
    this.teste = teste;
    this.params =  {id:  this.teste};
    this.pushPage = HomePage;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public autenticar(teste): void {
    //inserir lógica aqui dentro
    let gambi = teste;
    console.log(gambi);
    if(gambi){  
      this.navCtrl.push(HomePage, {'singlePost': gambi});
  }
   // this.params =  {data:  teste,};
    //this.teste = teste;
    //this.pushPage = HomePage;
    //console.log(this.params);
  }
}
