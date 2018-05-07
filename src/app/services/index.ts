import { ResourcesService } from './Resources';
import { CurrentUser } from './CurrentUser';
import { Data } from './Data';

export {
    ResourcesService, Data, CurrentUser
}

export var servicesList: any[] = [
    ResourcesService, Data, CurrentUser
]