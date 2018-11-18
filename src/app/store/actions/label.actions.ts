import {Action} from '@ngrx/store';

export const UPDATE_LABEL = 'UPDATE_LABEL';

export class UpdateLabel implements Action {
    readonly type = 'UPDATE_LABEL';

    constructor(public payload: {label: string, positionX: number, positionY: number}) {}
}

export type LabelActions = UpdateLabel;
