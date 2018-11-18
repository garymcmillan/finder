import * as LabelActions from '../actions/label.actions';

export interface State {
    label: string;
    positionX: number;
    positionY: number;
}
const initialState = {
    label: null,
    positionX: null,
    positionY: null
};

export function labelReducer(state = initialState, action: LabelActions.LabelActions) {
    switch (action.type) {
        case LabelActions.UPDATE_LABEL:
            return {
                ...state,
                label: action.payload.label,
                positionX: action.payload.positionX,
                positionY: action.payload.positionY,
            };
        default:
            return state;
    }
}
