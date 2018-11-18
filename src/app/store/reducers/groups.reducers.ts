import * as GroupsActions from '../actions/groups.actions';
import {Group} from '../../shared/models/groups.model';
import * as NavActions from '../actions/nav.actions';
import * as CategoryActions from '../actions/category.actions';

export interface State {
    groups: Group[];
}
const initialState = {
    groups: null
};

export function groupsReducer(state = initialState, action: GroupsActions.GroupsActions) {
    switch (action.type) {
        case GroupsActions.GET_GROUPS:
            return {
                ...state,
                groups: action.payload
            };
        case CategoryActions.RESET:
            return initialState;
        default:
            return state;
    }

}
