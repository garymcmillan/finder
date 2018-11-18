import {Action} from '@ngrx/store';
import {Group} from '../../shared/models/groups.model';
import {Category} from '../../shared/models/categories.model';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SET_SUBCATEGORIES = 'SET_SUBCATEGORIES';
export const SELECT_SUBCATEGORY = 'SELECT_SUBCATEGORY';
export const RESET_SUBCATEGORY = 'RESET_SUBCATEGORY';
export const RESET = 'RESET';

export class SelectCategory implements Action {
    readonly type = 'SELECT_CATEGORY';

    constructor(public payload: Category) {}
}

export class SetSubCategories implements Action {
    readonly type = 'SET_SUBCATEGORIES';

    constructor(public payload: Category[]) {}
}

export class ResetSubCategory implements Action {
    readonly type = RESET_SUBCATEGORY;
}

export class SelectSubCategory implements Action {
    readonly type = 'SELECT_SUBCATEGORY';

    constructor(public payload: Category) {}
}

export class Reset implements Action {
    readonly type = 'RESET';
}

export type CategoryActions =
    SelectCategory |
    SetSubCategories |
    SelectSubCategory |
    ResetSubCategory |
    Reset;
