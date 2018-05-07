import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResourcesService } from './services';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    resources: ResourcesService
  ) {
    resources.getUserInSession().subscribe((user) => {
      
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}