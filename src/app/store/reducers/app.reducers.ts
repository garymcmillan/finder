import * as NavReducer from './nav.reducers';
import * as LabelReducer from './label.reducers';
import * as GroupsReducer from '../reducers/groups.reducers';
import * as CategoryReducer from '../reducers/category.reducers';
import * as AttributesReducer from '../reducers/attributes.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    nav: NavReducer.State;
    groups: GroupsReducer.State;
    categories: CategoryReducer.State;
    attributes: AttributesReducer.State;
    label: LabelReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    nav: NavReducer.navReducer,
    groups: GroupsReducer.groupsReducer,
    categories: CategoryReducer.categoryReducer,
    attributes: AttributesReducer.attributesReducer,
    label: LabelReducer.labelReducer
};
