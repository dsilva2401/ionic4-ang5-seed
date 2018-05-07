import { Injector } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { ComponentY } from './components';

export var states: any[] = [
    { name: 'componentY', url: '/component-y', component: ComponentY },
]

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  
    // If no URL matches, go to the `hello` state by default
    router.urlService.rules.otherwise({ state: 'componentX' });
    
  }