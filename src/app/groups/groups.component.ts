import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Group} from '../shared/models/groups.model';
import {Category} from '../shared/models/categories.model';
import {NavService} from '../shared/services/nav.service';
import * as navActions from '../store/actions/nav.actions';
import * as labelActions from '../store/actions/label.actions';
import * as fromApp from '../store/reducers/app.reducers';
import * as categoryActions from '../store/actions/category.actions';
import * as attributeActions from '../store/actions/attributes.actions';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {

    groupsState: Observable<{groups: Group[]}>;
    labelState;
    navState;
    navSubscription;
    showMe = false;

    constructor(
    private dataService: DataService,
    private router: Router,
    private navService: NavService,
    private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.groupsState = this.store.select('groups');
        this.labelState = this.store.select('label');
        this.navState = this.store.select('nav');
        this.navSubscription = this.navState.subscribe((navState) => {
            if (navState.currentObject === 'group') {
                this.showMe = true;
            }
        });
    }

    ngOnDestroy() {
        this.showMe = false;
        this.navSubscription.unsubscribe();
    }

    onGetSubCategories(selectedCategory: Category) {
        this.showMe = false;
        this.navService.toggleRightPanel();
        this.store.dispatch(new categoryActions.SelectCategory(selectedCategory));
        this.store.dispatch(new categoryActions.ResetSubCategory());
        this.store.dispatch(new attributeActions.AttributeReset());
        this.store.dispatch(new navActions.NavReset());
        const level = +selectedCategory.level + +1;
        this.dataService.fetchSubCategories(selectedCategory.catid, level).subscribe(
            (data) => {
                this.store.dispatch(new navActions.NextStep(2));
                // this.router.navigate([selectedCategory.catid]);
                this.navService.toggleRightPanel();
                this.store.dispatch(new navActions.SetCurrentObject('category'));
            },
            (error) => console.log(error)
        );
    }

    seeMore(name) {
        const element = document.querySelector('.' + name + ' ul');
        const more = document.querySelector('.' + name + ' .see-more');
        const less = document.querySelector('.' + name + ' .see-less');
        const top = element.scrollTop;
        const pos = (document.querySelector('.' + name + ' ul').scrollTop + 340);
        const max = document.querySelector('.' + name + ' ul').scrollHeight;

        less.classList.add('show');
        if (pos === max || (pos + 150) >= max) {
            more.classList.add('hide');
        }

        element.scrollTo({ top: top + 150, behavior: 'smooth' });


    }

    seeLess(name) {
        const element = document.querySelector('.' + name + ' ul');
        const top = element.scrollTop;
        const less = document.querySelector('.' + name + ' .see-less');
        const more = document.querySelector('.' + name + ' .see-more');
        const pos = (document.querySelector('.' + name + ' ul').scrollTop + 340);
        const max = document.querySelector('.' + name + ' ul').scrollHeight;

        if (top === 0 || (top - 150) <= 0) {
            less.classList.remove('show');
        }

        if (pos === max) {
            more.classList.remove('hide');
        }

        element.scrollTo({ top: top - 150, behavior: 'smooth' });



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
