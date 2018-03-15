import { Injector } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { ComponentX, ComponentY } from './components';

export var states: any[] = [
    { name: 'componentX', url: '/component-x', component: ComponentX },
    { name: 'componentY', url: '/component-y', component: ComponentY },
]

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  
    // If no URL matches, go to the `hello` state by default
    router.urlService.rules.otherwise({ state: 'componentX' });
    
  }