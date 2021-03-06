import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUser {

    // Attributes

    // Methods
    constructor () {

    }

    public set (key: string, value: string) {
        window.localStorage.setItem(key, value);
    }
    
    public get (key: string) {
        return window.localStorage.getItem(key);
    }
    
    public setObject (key: string, obj: any) {
        this.set(key, JSON.stringify(obj));
    }
    
    public getObject (key: string) {
        return JSON.parse(this.get(key));
    }

}