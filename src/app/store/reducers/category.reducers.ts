import * as CategoryActions from '../actions/category.actions';
import {Category} from '../../shared/models/categories.model';
import * as NavActions from '../actions/nav.actions';

export interface State {
    selectedCategory: Category;
    subCategories: Category[];
    selectedSubCategories: Category;
}
const initialState = {
    selectedCategory: null,
    subCategories: null,
    selectedSubCategories: null
};

export function categoryReducer(state = initialState, action: CategoryActions.CategoryActions) {
    switch (action.type) {
        case CategoryActions.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        case CategoryActions.SET_SUBCATEGORIES:
            return {
                ...state,
                subCategories: action.payload
            };
        case CategoryActions.SELECT_SUBCATEGORY:
            return {
                ...state,
                selectedSubCategories: action.payload
            };
        case CategoryActions.RESET_SUBCATEGORY:
            return {
                ...state,
                selectedSubCategories: null
            };
        case CategoryActions.RESET:
            return initialState;
        default:
            return state;
    }
}
