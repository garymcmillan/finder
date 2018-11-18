import {Action} from '@ngrx/store';
import {Attribute, Options, SelectedAttribute} from '../../shared/models/attributes.model';
import {Category} from '../../shared/models/categories.model';

export const FETCH_ATTRIBUTES = 'FETCH_ATTRIBUTES';
export const SET_ATTRIBUTES = 'SET_ATTRIBUTES';
export const SET_ATTRIBUTES_WITH_PRICE = 'SET_ATTRIBUTES_WITH_PRICE';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
export const SELECT_OPTIONS = 'SELECT_OPTIONS';
export const REMOVE_OPTIONS = 'REMOVE OPTIONS';
export const ADD_OPTIONS = 'ADD_OPTIONS';
export const FILTER_PRICE = 'FILTER_PRICE';
export const SET_CATEGORY_ATTRIBUTES = 'SET_CATEGORY_ATTRIBUTES';
export const ATTRIBUTE_RESET = 'ATTRIBUTE_RESET';
export const RANGE = 'RANGE';


export class FetchAttributes implements  Action {
    readonly  type = 'FETCH_ATTRIBUTES';

    constructor(public payload: Category) {}
}
export class SetAttributes implements Action {
    readonly type = 'SET_ATTRIBUTES';

    // constructor(public payload: Attribute[]){}
    constructor(public payload: {attributes: Attribute[]}) {}
}

export class SetAttributesWithPrice implements Action {
    readonly type = 'SET_ATTRIBUTES_WITH_PRICE';

    // constructor(public payload: Attribute[]){}
    constructor(public payload: {min_price: number, max_price: number, increment: number, attributes: Attribute[]}) {}
}

export class SetCategoryAttributes implements Action {
    readonly type = SET_CATEGORY_ATTRIBUTES;

    constructor(public payload: any) {}
}

export class SelectAttributes implements Action {
    readonly type = 'SELECT_ATTRIBUTE';

    constructor(public payload: SelectedAttribute) {}
}

export class SelectOptions implements Action {
    readonly type = 'SELECT_OPTIONS';

    constructor(public payload: Options) {}
}

export class RemoveOptions implements Action {
    readonly type = REMOVE_OPTIONS;

    constructor(public payload: any) {}
}

export class AddOptions implements Action {
    readonly type = 'ADD_OPTIONS';

    constructor(public subCat: Category, public attribute: Attribute, public options: Options[]) {}
}

export class FilterPrice implements Action {
    readonly type = 'FILTER_PRICE';

    constructor (public range: Array<any>) {}
}

export class AttributeReset implements Action {
    readonly type = 'ATTRIBUTE_RESET';
}

export class Range implements Action {
    readonly type = 'RANGE';

    constructor(public payload: Array<any>) {}
}

export type AttributesActions =
    SetAttributes |
    SetAttributesWithPrice |
    SelectAttributes |
    SelectOptions |
    RemoveOptions |
    AddOptions |
    FilterPrice |
    SetCategoryAttributes |
    Range |
    AttributeReset;
