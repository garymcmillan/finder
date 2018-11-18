import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { Category } from '../../shared/models/categories.model';
import { ActivatedRoute, Router } from '@angular/router';
import {NavService} from '../../shared/services/nav.service';
import * as categoryActions from '../../store/actions/category.actions';
import * as attributeActions from '../../store/actions/attributes.actions';
import * as fromApp from '../../store/reducers/app.reducers';
import * as labelActions from '../../store/actions/label.actions';
import * as navActions from '../../store/actions/nav.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
    categoriesState;
    subCategories;
    labelState;
    navState;
    navSubscription;
    showMe = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private navService: NavService,
        private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.categoriesState = this.store.select('categories');
        this.labelState = this.store.select('label');
        this.navState = this.store.select('nav');
        this.navSubscription = this.navState.subscribe((navState) => {
            if (navState.currentObject === 'category') {
                this.showMe = true;
            }
        });
    }

    ngOnDestroy() {
        this.showMe = false;
        this.navSubscription.unsubscribe();
    }

    onGetAttributes(subCategory) {
        this.navService.toggleRightPanel();
        this.store.dispatch(new categoryActions.SelectSubCategory(subCategory));
        this.store.dispatch(new attributeActions.AttributeReset());
        this.store.dispatch(new navActions.NavReset());
        this.store.dispatch(new attributeActions.FetchAttributes(subCategory));
        this.store.dispatch(new navActions.SetCurrentObject(null));
        // this.router.navigate([subCategory.catid], {relativeTo: this.activatedRoute});
        this.leave();
    }

    enter(event, label) {
        if (label.length > 17) {
            this.store.dispatch(
                new labelActions.UpdateLabel(
                    {
                        label: label,
                        positionX: event.toElement.offsetLeft,
                        positionY: event.toElement.offsetTop + 40
                    }
                )
            );
        }
    }

    leave() {
        this.store.dispatch(
            new labelActions.UpdateLabel(
                {label: null, positionX: null, positionY: null}
            )
        );
    }

}
