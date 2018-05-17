import { Component } from '@angular/core';
import { ResourcesService, UIService } from '../../services';

@Component({
  selector: 'access',
  templateUrl: 'template.html'
})
export class AccessComponent {

  // Attributes
  ui: UIService;
  resources: ResourcesService;
  isShowingLogin: boolean;
  isShowingRegister: boolean;
  loginCredentials: any;

  // Methods
  constructor (
    resources: ResourcesService, ui: UIService
  ) {
    this.ui = ui;
    this.resources = resources;
    this.showLogin();
    this.loginCredentials = {};
  }

  login () {
    this.resources.loginUsingEmailPassword(
      this.loginCredentials.email,
      this.loginCredentials.password
    ).subscribe((data) => {
      console.log('Login data', data);
      this.ui.goHome();
    }, (resp) => {
      console.log('Error on login', resp);
    });
  }

  showLogin () {
    this.isShowingLogin = true;
    this.isShowingRegister = false;
  }
  
  showRegister () {
    this.isShowingLogin = false;
    this.isShowingRegister = true;
  }

}
