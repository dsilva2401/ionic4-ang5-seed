import {Injectable, Inject} from '@angular/core';

@Injectable()
export class EventsManagerService {

    // Attributes
    private events: any;

    // Methods
    constructor () {
        this.events = {};
    }

    createEvent (name) {
        this.events[name] = document.createEvent('Event');
        this.events[name].initEvent(name, true, true);
    }
    
    subscribe (name, callback) {
        document.addEventListener(name, function (e) {
            e = e || {};
            callback(e.__data__ || null);
        }, false);
    }

    emit (name, params?: any) {
        if (params) {
            this.events[name].__data__ = params;
        }
        document.dispatchEvent(this.events[name]);
    }
    
}