import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import * as AttributesActions from '../actions/attributes.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';
import {Category} from '../../shared/models/categories.model';
import * as navActions from '../actions/nav.actions';
import {FilterPrice} from '../actions/attributes.actions';
import {environment} from '../../../environments/environment';

@Injectable()
export class AttributesEffects {
    @Effect () fetchAttributes = this.actions$
        .ofType(AttributesActions.FETCH_ATTRIBUTES)
        .map((action: AttributesActions.FetchAttributes) => {
            return action.payload;
        })
        .switchMap((category: Category) => {
            // this.store.dispatch(new navActions.SetDataLoading(true));
            return this.http.get('assets/data/attributes.json', {});
        })
        .map(
            (res) => {
                const newArray = this.objectToArray(res);

                this.store.dispatch(new AttributesActions.SetCategoryAttributes(res));
                this.store.dispatch(new navActions.SetDataLoading(false));
                if (newArray.indexOf('max_price')) {
                    return {type: AttributesActions.SET_ATTRIBUTES_WITH_PRICE, payload: res};
                } else {
                    return {type: AttributesActions.SET_ATTRIBUTES, payload: res};
                }

            }
        )
        .do (
            () => {
                this.store.dispatch(new navActions.NextStep(3));
            }

        );
    @Effect() selectOptions = this.actions$
        .ofType(AttributesActions.SELECT_OPTIONS)
        .map((action: AttributesActions.SelectOptions) => {
            return action;
        })
        .withLatestFrom(this.store, (action, state) => ({action, state}))
        .switchMap((payload) => {
            const subCat = payload.state.categories.selectedSubCategories;
            const options = payload.state.attributes.selectedOptions;
            // this.store.dispatch(new navActions.SetDataLoading(true));
            return this.http.post(environment.apiUrl + 'finder/api/attributes/id/' + subCat.catid, JSON.stringify(options));
        })
        .map(
            (res) => {
                const newArray = this.objectToArray(res);
                this.store.dispatch(new navActions.SetDataLoading(false));
                if (newArray.indexOf('max_price')) {
                    return {type: AttributesActions.SET_ATTRIBUTES_WITH_PRICE, payload: res};
                } else {
                    return {type: AttributesActions.SET_ATTRIBUTES, payload: res};
                }
            }
        )
        .do(
            () => {
                this.store.dispatch(new navActions.NextStep(3));
            }
        );

    @Effect() removeOptions = this.actions$
        .ofType(AttributesActions.REMOVE_OPTIONS)
        .map((action: AttributesActions.RemoveOptions) => {
            return action;
        })
        .withLatestFrom(this.store, (action, state) => ({action, state}))
        .switchMap((payload) => {
            const subCat = payload.state.categories.selectedSubCategories;
            const options = payload.state.attributes.selectedOptions;
            this.store.dispatch(new navActions.SetDataLoading(true));
            return this.http.post(environment.apiUrl + 'finder/api/attributes/id/' + subCat.catid, JSON.stringify(options));
        })
        .map(
            (res) => {
                const newArray = this.objectToArray(res);
                this.store.dispatch(new navActions.SetDataLoading(false));
                if (newArray.indexOf('max_price')) {
                    return {type: AttributesActions.SET_ATTRIBUTES_WITH_PRICE, payload: res};
                } else {
                    return {type: AttributesActions.SET_ATTRIBUTES, payload: res};
                }
            }
        )
        .do(
            () => {
                this.store.dispatch(new navActions.NextStep(3));
            }
        );


    objectToArray(value) {
        const result = [];
        Object.keys(value).map((key) => {
            const group = {name: key, obj: value[key]};

            result.push(group);
        });

        return result;
    }

    constructor(
        private actions$: Actions,
        private store: Store<fromApp.AppState>,
        private http: HttpClient) {}
}
