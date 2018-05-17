import { ResourcesService } from './Resources';
import { CurrentUser } from './CurrentUser';
import { Data } from './Data';
import { EventsManagerService } from './EventsManager';
import { UIService } from './UI';

export {
    ResourcesService, Data, CurrentUser,
    EventsManagerService, UIService
}

export var servicesList: any[] = [
    ResourcesService, Data, CurrentUser,
    EventsManagerService, UIService
]