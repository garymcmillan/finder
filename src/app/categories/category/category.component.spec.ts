// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { TruncatePipe } from '../../pipes/truncate.pipe';
//
// import { CategoryComponent } from './category.component';
// import {ObjectToArrayPipe, ObjectToArrayWithKeysPipe} from '../../pipes/object-to-array.pipe';
// import {NavService} from '../../shared/services/nav.service';
// import {DataService} from '../../shared/services/data.service';
// import {StoreModule} from '@ngrx/store';
// import {NavEffects} from '../../store/nav.effects';
// import {HttpModule} from '@angular/http';
// import {reducers} from '../../store/app.reducers';
// import {NouisliderModule} from 'ng2-nouislider';
// import {AppRoutingModule} from '../../app-routing.module';
// import {BrowserModule} from '@angular/platform-browser';
// import {AttributesEffects} from '../../store/attributes.effects';
// import {EffectsModule} from '@ngrx/effects';
// import {HttpClientModule} from '@angular/common/http';
// import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {GroupsComponent} from '../../groups/groups.component';
// import {CategoriesComponent} from '../categories.component';
// import {AttributesComponent} from '../../attributes/attributes.component';
// import { APP_BASE_HREF } from '@angular/common';
//
// describe('CategoryComponent', () => {
//   let component: CategoryComponent;
//   let fixture: ComponentFixture<CategoryComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//           CategoryComponent,
//           GroupsComponent,
//           CategoriesComponent,
//           AttributesComponent,
//           TruncatePipe,
//           ObjectToArrayPipe,
//           ObjectToArrayWithKeysPipe
//       ],
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
//         providers: [DataService, NavService, { provide: APP_BASE_HREF, useValue : '/' }]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CategoryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
