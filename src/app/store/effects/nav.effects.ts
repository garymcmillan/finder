import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as NavActions from '../actions/nav.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';
import {Attribute} from '../../shared/models/attributes.model';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class NavEffects {
    @Effect({ dispatch: false }) buildUrl = this.actions$
        .ofType(NavActions.BUILD_URL)
        .map((action: NavActions.BuildUrl) => {
            return action;
        })
        .withLatestFrom(this.store, (action, state) => ({action, state}))
        .map(
            (payload) => {
                const selectedSubCategory = payload.state.categories.selectedSubCategories;
                const selectedOptions = payload.state.attributes.selectedOptions;
                let priceRange;

                if (payload.state.attributes.range.length === 0) {
                    priceRange = [payload.state.attributes.min_price, payload.state.attributes.max_price];
                } else {
                    priceRange = payload.state.attributes.range;
                }

                const finalChoices = {
                    selectedGroup: payload.state.categories.selectedCategory,
                    selectedCategory: selectedSubCategory,
                    selectedOptions: selectedOptions,
                    priceRange: priceRange,
                };
                this.store.dispatch(new NavActions.SetFinalChoices(finalChoices));
                // let categoryPath = environment.apiUrl + selectedSubCategory.path + '?';
                //
                // if (selectedOptions) {
                //     const keyArray = Object.keys(selectedOptions);
                //     for (const property in selectedOptions) {
                //         if (selectedOptions.hasOwnProperty(property)) {
                //             const attrName = property;
                //             let attr: Attribute;
                //             attr = selectedOptions[property];
                //
                //             if (keyArray.indexOf(property) === keyArray.length - 1) {
                //                 categoryPath += attrName + '=' + attr.options[0].value;
                //             } else {
                //                 categoryPath += attrName + '=' + attr.options[0].value + '&';
                //             }
                //         }
                //     }
                // }

                // if (priceRange[0] !== priceRange[1]) {
                //     categoryPath += '&price=' + priceRange[0] + '-' + priceRange[1];
                // }
                // parent.window.location.href = categoryPath;
            }
        );
    @Effect({dispatch: false}) mapAttribute = this.actions$
        .ofType(NavActions.MAP_ATTRIBUTE)
        .map((action: NavActions.MapAttribute) => {
            return action;
        })
        .withLatestFrom(this.store, (action, state) => ({action, state}))
        .do(
            (payload) => {
                const attributes = this.dataService.convertToArrayWithKeys(payload.state.attributes.attributes);
                const openAttribute = payload.state.attributes.openAttribute;
                const label = payload.action.payload.label;
                attributes.forEach(
                    (attribute, index, array) => {
                        if (attribute.name === openAttribute.name) {
                            if (index === 0 ) {
                                this.store.dispatch(new NavActions.Attribute0(label));
                            } else if (index === 1) {
                                this.store.dispatch(new NavActions.Attribute1(label));
                            } else if (index === 2) {
                                    this.store.dispatch(new NavActions.Attribute2(label));
                            }
                        } else {
                            return null;
                        }
                    }
                );
            }
        );

    @Effect({dispatch: true}) removeMappedAttribute = this.actions$
        .ofType(NavActions.REMOVE_MAPPED_ATTRIBUTE)
        .map((action: NavActions.RemoveMappedAttribute) => {
            return action.payload;
        })
        .map(payload => {
            let attributes: any;
            const navState = this.store.select('nav');
            navState.subscribe((state) => {
                attributes = state;
            });

            if (payload.options.find(obj => {
                return obj.label === attributes.attribute0;
            })) {
                return {type: NavActions.RESET_ATTRIBUTE, payload: 'attribute0'};
            } else if (payload.options.find(obj => {
                return obj.label === attributes.attribute1;
            })) {
                return {type: NavActions.RESET_ATTRIBUTE, payload: 'attribute1'};
            } else if (payload.options.find(obj => {
                return obj.label === attributes.attribute2;
            })) {
                return {type: NavActions.RESET_ATTRIBUTE, payload: 'attribute2'};
            }
        });

    constructor(
        private actions$: Actions,
        private store: Store<fromApp.AppState>,
        private dataService: DataService,
        private router: Router
    ) {}
}
