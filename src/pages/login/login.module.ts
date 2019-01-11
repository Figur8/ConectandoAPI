import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@NgModule({
  declarations: [
    LoginPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    TabsPage,
    HomePage]
})
export class LoginPageModule { }
