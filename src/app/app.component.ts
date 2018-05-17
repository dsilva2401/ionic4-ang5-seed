import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResourcesService, UIService } from './services';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  // Attributes
  currentUser: any;
  isLoadingSession: boolean;
  isShowingAccess: boolean;
  isShowingHome: boolean;
  ui: UIService;

  // Methods
  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    resources: ResourcesService, ui: UIService
  ) {
    this.ui = ui;
    this.isLoadingSession = true;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // Init setup
      statusBar.styleDefault();
      splashScreen.hide();

      // Setup ui events
      this.ui.onGoAccess(() => { this.showAccess(); });
      this.ui.onGoHome(() => { this.showHome(); });

      // Setup session
      resources.getUserInSession().subscribe((user) => {
        console.log('Current user', user);
        this.isLoadingSession = false;
        this.currentUser = user;
        this.showHome();
      }, (resp) => {
        this.isLoadingSession = false;
        this.showAccess();
      });
    });
  }

  showAccess () {
    this.isShowingHome = false;
    this.isShowingAccess = true;
  }

  showHome () {
    this.isShowingAccess = false;
    this.isShowingHome = true;
  }

}