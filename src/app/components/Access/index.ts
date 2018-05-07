import { Component } from '@angular/core';

@Component({
  selector: 'access',
  templateUrl: 'template.html'
})
export class AccessComponent {

  // Attributes
  isShowingLogin: boolean;
  isShowingRegister: boolean;

  // Methods
  constructor() {
    this.showLogin();
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
