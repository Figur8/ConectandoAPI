
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsumeApiProvider } from '../../providers/consume-api/consume-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //data: string[];
  teste: Observable<any>;
  public resultado: any;
  //funcional: String;
  constructor(public param: NavParams, public navCtrl: NavController, private ConsumeAPI: ConsumeApiProvider, public http: HttpClient) {
    let funcional = this.param.get("singlePost");
    console.log(funcional);
    this.teste = this.http.get('http://192.168.1.2:8080/demo/teste?matricula=' + funcional);
    this.teste.subscribe(data => {
      this.resultado = data

    })

  }

  ionViewDidLoad() {
    }

  // ListaHome(test){
  // this.navCtrl.push('salas', {test : test});
  //  this.ConsumeAPI.lista().subscribe(data => this.data = data);
  //}
}
