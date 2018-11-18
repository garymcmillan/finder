import * as NavActions from '../actions/nav.actions';

export interface State {
    step: number;
    attribute0: string;
    attribute1: string;
    attribute2: string;
    dataLoading: boolean;
    currentObject: string;
    finalChoices: object;
}

const initialState = {
    step: 1,
    attribute0: null,
    attribute1: null,
    attribute2: null,
    dataLoading: false,
    currentObject: null,
    finalChoices: null,
};

export function navReducer(state = initialState, action: NavActions.NavActions) {
    switch (action.type) {
        case NavActions.NEXT_STEP:
            return {
                ...state,
                step: action.payload
            };
        case NavActions.ATTRIBUTE0:
            return {
                ...state,
                attribute0: action.payload
            };
        case NavActions.ATTRIBUTE1:
            return {
                ...state,
                attribute1: action.payload
            };
        case NavActions.ATTRIBUTE2:
            return {
                ...state,
                attribute2: action.payload
            };
        case NavActions.SET_CURRENT_OBJECT:
            return {
                ...state,
                currentObject: action.payload
            };
        case NavActions.SET_DATA_LOADING:
            return {
                ...state,
                dataLoading: action.payload
            };
        case NavActions.SET_FINAL_CHOICES:
            return {
                ...state,
                finalChoices: action.payload
            };
        case NavActions.RESET_ATTRIBUTE:
            const thisState = state;
            thisState[action.payload] = null;
            return {
                ...thisState
            };
        case NavActions.NAV_RESET:
            return initialState;
        case NavActions.BUILD_URL:
        default:
            return state;
    }

}
