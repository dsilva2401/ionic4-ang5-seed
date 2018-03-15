import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UIRouterModule } from "@uirouter/angular";
import { servicesList } from './services';
import { MyApp } from './app.component';
import { componentsList } from './components';
import { states, uiRouterConfigFn } from './app.routes';

@NgModule({
  declarations: [
    MyApp
  ].concat(componentsList),
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: states, useHash: true, config: uiRouterConfigFn }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ].concat(servicesList)
})
export class AppModule {}
