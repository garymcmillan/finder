// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { GroupsComponent } from './groups.component';
// import {TruncatePipe} from '../pipes/truncate.pipe';
// import {ObjectToArrayPipe} from '../pipes/object-to-array.pipe';
// import {DataService} from '../shared/services/data.service';
// import {NavService} from '../shared/services/nav.service';
// import {Group} from '../shared/models/groups.model';
// import {Category} from '../shared/models/categories.model';
// import * as navActions from '../store/nav.actions';
// import * as labelActions from '../store/label.actions';
// import * as fromApp from '../store/app.reducers';
// import * as categoryActions from '../categories/store/category.actions';
// import {Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import {Observable} from 'rxjs';
// import {Store, StoreModule} from '@ngrx/store';
// import { Injectable } from '@angular/core';
// import {Http, HttpModule, Response} from '@angular/http';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import * as groupsActions from './store/groups.actions';
// import {NavEffects} from '../store/nav.effects';
// import {reducers} from '../store/app.reducers';
// import {NouisliderModule} from 'ng2-nouislider';
// import {AppRoutingModule} from '../app-routing.module';
// import {BrowserModule} from '@angular/platform-browser';
// import {AttributesEffects} from '../attributes/store/attributes.effects';
// import {EffectsModule} from '@ngrx/effects';
// import {HttpClientModule} from '@angular/common/http';
// import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {CategoryComponent} from '../categories/category/category.component';
// import {CategoriesComponent} from '../categories/categories.component';
// import {AttributesComponent} from '../attributes/attributes.component';
// import { APP_BASE_HREF } from '@angular/common';
//
// describe('GroupsComponent', () => {
//   let component: GroupsComponent;
//   let fixture: ComponentFixture<GroupsComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ GroupsComponent,  CategoriesComponent, CategoryComponent, AttributesComponent, TruncatePipe, ObjectToArrayPipe ],
//         imports: [
//             BrowserModule,
//             AppRoutingModule,
//             HttpModule,
//             HttpClientModule,
//             BrowserAnimationsModule,
//             NouisliderModule,
//             StoreModule.forRoot(reducers),
//             EffectsModule.forRoot([AttributesEffects, NavEffects]),
//             StoreDevtoolsModule.instrument({
//                 maxAge: 5
//             })
//         ],
//         providers: [DataService, NavService, { provide: APP_BASE_HREF, useValue : '/' }],
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(GroupsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
