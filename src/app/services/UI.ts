import {Injectable, Inject} from '@angular/core';
import {EventsManagerService} from './EventsManager';

@Injectable()
export class UIService {

    // Attributes
    private events: any;
    private eventsManager: EventsManagerService;

    // Methods
    constructor (eventsManager: EventsManagerService) {
        this.eventsManager = eventsManager;
        this.events = {};
        this.eventsManager.createEvent('goHomeAction');
        this.eventsManager.createEvent('goAccessAction');
        this.eventsManager.createEvent('goHomeStateAction');
    }

    public onGoHome (callback) {
        this.eventsManager.subscribe('goHomeAction', () => {
            callback();
        });
    }

    public goHome () {
        this.eventsManager.emit('goHomeAction');
    }

    public onGoAccess (callback) {
        this.eventsManager.subscribe('goAccessAction', () => {
            callback();
        });
    }

    public goAccess () {
        this.eventsManager.emit('goAccessAction');
    }

    public onGoHomeState (callback) {
        this.eventsManager.subscribe('goHomeStateAction', () => {
            callback();
        });
    }

    public goHomeState () {
        this.eventsManager.emit('goHomeStateAction');
    }
    
}