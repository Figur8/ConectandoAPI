import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private ConsumeAPI: ConsumeApiProvider, public http: HttpClient) {
    this.teste = this.http.get('http://192.168.1.2:8080/demo/all');
    this.teste.subscribe(data => {
      console.log('my data: ', data);
    })  

  }

  ionViewDidLoad(){
    this.ListaHome();
  }

  ListaHome(){
  //  this.ConsumeAPI.lista().subscribe(data => this.data = data);
  }
}
