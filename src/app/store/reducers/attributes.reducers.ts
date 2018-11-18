import * as AttributesActions from '../actions/attributes.actions';
import {Attribute, SelectedAttribute, Options} from '../../shared/models/attributes.model';

export interface State {
    categoryAttributes: Attribute[];
    attributes: Attribute[];
    openAttribute: SelectedAttribute;
    selectedOptions: {};
    min_price: number;
    max_price: number;
    increment: number;
    attributeFetchProgress: number;
    range: any[];
}
const initialState = {
    categoryAttributes: null,
    attributes: null,
    openAttribute: null,
    selectedOptions: null,
    min_price: 0,
    max_price: 100,
    increment: 1,
    attributeFetchProgress : -1,
    range: [],
};

export function attributesReducer(state = initialState, action: AttributesActions.AttributesActions) {
    switch (action.type) {
        case AttributesActions.SET_ATTRIBUTES_WITH_PRICE:
            return {
                ...state,
                attributes: action.payload,
                min_price: action.payload.min_price,
                max_price: action.payload.max_price,
                increment: action.payload.increment,

            };
        case AttributesActions.RANGE:
            return {
                ...state,
                range: action.payload,
            };
        case AttributesActions.SET_ATTRIBUTES:
            return {
                ...state,
                attributes: action.payload,
            };
        case AttributesActions.SET_CATEGORY_ATTRIBUTES:
            return {
                ...state,
                categoryAttributes: action.payload
            };
        case AttributesActions.SELECT_ATTRIBUTE:
            return {
                ...state,
                openAttribute: {name: action.payload.name, obj: state.attributes[action.payload.name]},
            };
        case AttributesActions.SELECT_OPTIONS:
            const key = state.openAttribute.name;
            const attrOptions: Options[] = [new Options(action.payload.label, action.payload.value)];
            const newAttr: Attribute = new Attribute(
                state.openAttribute.name,
                state.openAttribute.priority,
                state.openAttribute.label,
                attrOptions
            );
            const newSelectedAttr: SelectedAttribute = new SelectedAttribute(key, newAttr);

            return {
                ...state,
                selectedOptions: {...state.selectedOptions, [newSelectedAttr.name]: newSelectedAttr.obj}
            };
        case AttributesActions.REMOVE_OPTIONS:
            const attribute = action.payload;
            let selected = state.selectedOptions;
            if (selected.hasOwnProperty(attribute.name)) {
                delete selected[attribute.name];
            }
            return {
                ...state,
                selectedOptions: selected
            };
        case AttributesActions.ATTRIBUTE_RESET:
            return initialState;
        default:
            return state;
    }

}
