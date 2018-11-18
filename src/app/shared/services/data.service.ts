import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Group } from '../models/groups.model';
import { Category } from '../models/categories.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as groupsActions from '../../store/actions/groups.actions';
import * as categoryActions from '../../store/actions/category.actions';
import * as fromApp from '../../store/reducers/app.reducers';
import * as navActions from '../../store/actions/nav.actions';
import {environment} from '../../../environments/environment';

@Injectable()

export class DataService {
    public groups               = new Subject <Group[]>();
    public subCategories        = new BehaviorSubject <Category[]>([]);

  constructor(private http: Http, private store: Store<fromApp.AppState>) {
  }

  fetchGroups() {
    // this.store.dispatch(new navActions.SetDataLoading(true));
    return this.http.get('assets/data/groups.json', {})
    .map(
      (response: Response) => {
        const data = response.json();
        this.store.dispatch(new navActions.SetDataLoading(false));
        this.store.dispatch(new groupsActions.SetGroups(data));
      }
    );
  }

  fetchSubCategories(id: number, level: number) {
    // this.store.dispatch(new navActions.SetDataLoading(true));
    return this.http.get('assets/data/categories.json' , {})
    .map(
      (response: Response) => {
        const data = response.json();
        this.store.dispatch(new navActions.SetDataLoading(false));
        this.store.dispatch(new categoryActions.SetSubCategories(data));
      }
    );
  }

  convertToArray(data) {
    let array: Array<any> = [];
    array = Object.keys(data).map(function(arrayIndex) {
        const object = data[arrayIndex];

      return object;
    });

  }

  convertToArrayWithKeys(data) {
      const result = [];

    Object.keys(data).map((key) => {
        const group = {name: key, obj: data[key]};

        result.push(group);
    });
    return result;
  }
}
