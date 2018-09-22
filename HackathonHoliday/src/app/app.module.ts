import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MekaPage } from '../pages/meka/meka';
import { TataePage } from '../pages/tatae/tatae';
import { PaoPage } from '../pages/pao/pao';
import { TaoPage } from '../pages/tao/tao';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MekaPage,
    TataePage,
    PaoPage,
    TaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MekaPage,
    TataePage,
    PaoPage,
    TaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
