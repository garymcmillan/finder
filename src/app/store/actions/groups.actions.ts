import {Action} from '@ngrx/store';
import {Group} from '../../shared/models/groups.model';

export const GET_GROUPS = 'GET_GROUPS';
export const SELECTED_GROUP = 'SELECTED_GROUP';
export const RESET = 'RESET';

export class SetGroups implements Action {
    readonly type = 'GET_GROUPS';

    constructor(public payload: Group[]) {}
}
export class SelectGroups implements Action {
    readonly type = 'SELECTED_GROUP';
}

export class Reset implements Action {
    readonly type = 'RESET';
}

export type GroupsActions = SetGroups | SelectGroups | Reset;
