import {Action} from '@ngrx/store';

export const NEXT_STEP = 'NEXT_STEP';
export const MAP_ATTRIBUTE = 'MAP_ATTRIBUTE';
export const REMOVE_MAPPED_ATTRIBUTE = 'REMOVE_MAPPED_ATTRIBUTE';
export const ATTRIBUTE0 = 'ATTRIBUTE0';
export const ATTRIBUTE1 = 'ATTRIBUTE1';
export const ATTRIBUTE2 = 'ATTRIBUTE2';
export const BUILD_URL = 'BUILD_URL';
export const SET_DATA_LOADING = 'SET_DATA_LOADING';
export const SET_CURRENT_OBJECT = 'SET_CURRENT_OBJECT';
export const RESET_ATTRIBUTE = 'RESET_ATTRIBUTE';
export const NAV_RESET = 'NAV_RESET';
export const SET_FINAL_CHOICES = 'SET_FINAL_CHOICES';

export class NextStep implements Action {
    readonly type = 'NEXT_STEP';

    constructor(public payload: number) {}
}
export class MapAttribute implements Action {
    readonly  type = 'MAP_ATTRIBUTE';

    constructor(public payload) {}
}

export class RemoveMappedAttribute implements Action {
    readonly  type = REMOVE_MAPPED_ATTRIBUTE;

    constructor(public payload: any) {}
}

export class Attribute0 implements Action {
    readonly  type = 'ATTRIBUTE0';

    constructor(public payload: any) {}
}
export class Attribute1 implements Action {
    readonly  type = 'ATTRIBUTE1';

    constructor(public payload: any) {}
}
export class Attribute2 implements Action {
    readonly  type = 'ATTRIBUTE2';

    constructor(public payload: any) {}
}

export class BuildUrl implements Action {
    readonly type = 'BUILD_URL';

    // constructor(public payload: number){}
}

export class SetDataLoading implements Action {
    readonly type = SET_DATA_LOADING;

    constructor(public payload: boolean) {}
}

export class SetCurrentObject implements Action {
    readonly type = SET_CURRENT_OBJECT;

    constructor(public payload: string) {}
}

export class ResetAttribute implements Action {
    readonly  type = RESET_ATTRIBUTE;

    constructor(public payload: any) {}
}

export class NavReset implements Action {
    readonly type = 'NAV_RESET';
}

export class SetFinalChoices implements Action {
    readonly type = 'SET_FINAL_CHOICES';

    constructor(public payload: object) {}
}

export type NavActions =
    NextStep
    | MapAttribute
    | RemoveMappedAttribute
    | Attribute0
    | Attribute1
    | Attribute2
    | BuildUrl
    | SetDataLoading
    | SetCurrentObject
    | ResetAttribute
    | SetFinalChoices
    | NavReset;
