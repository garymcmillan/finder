// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { CategoriesComponent } from './categories.component';
// import {DataService} from '../shared/services/data.service';
// import {NavEffects} from '../store/nav.effects';
// import {HttpModule} from '@angular/http';
// import {AppRoutingModule} from '../app-routing.module';
// import {NavService} from '../shared/services/nav.service';
// import {EffectsModule} from '@ngrx/effects';
// import {HttpClientModule} from '@angular/common/http';
// import {NouisliderModule} from 'ng2-nouislider';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {reducers} from '../store/app.reducers';
// import {StoreModule} from '@ngrx/store';
// import {BrowserModule} from '@angular/platform-browser';
// import {AttributesEffects} from '../attributes/store/attributes.effects';
// import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {GroupsComponent} from '../groups/groups.component';
// import {CategoryComponent} from './category/category.component';
// import {AttributesComponent} from '../attributes/attributes.component';
// import {TruncatePipe} from '../pipes/truncate.pipe';
// import {ObjectToArrayPipe, ObjectToArrayWithKeysPipe} from '../pipes/object-to-array.pipe';
// import { APP_BASE_HREF } from '@angular/common';
//
// describe('CategoriesComponent', () => {
//   let component: CategoriesComponent;
//   let fixture: ComponentFixture<CategoriesComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CategoriesComponent, GroupsComponent,  AttributesComponent, CategoryComponent,
//           TruncatePipe,
//           ObjectToArrayPipe,
//           ObjectToArrayWithKeysPipe],
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
//     fixture = TestBed.createComponent(CategoriesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
