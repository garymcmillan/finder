// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import {TruncatePipe} from './pipes/truncate.pipe';
// import {ObjectToArrayPipe, ObjectToArrayWithKeysPipe} from './pipes/object-to-array.pipe';
// import {DataService} from './shared/services/data.service';
// import {NavEffects} from './store/nav.effects';
// import {HttpModule} from '@angular/http';
// import {NouisliderModule} from 'ng2-nouislider';
// import {AppRoutingModule} from './app-routing.module';
// import {NavService} from './shared/services/nav.service';
// import {EffectsModule} from '@ngrx/effects';
// import {HttpClientModule} from '@angular/common/http';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {reducers} from './store/app.reducers';
// import {StoreModule} from '@ngrx/store';
// import {BrowserModule} from '@angular/platform-browser';
// import {AttributesEffects} from './attributes/store/attributes.effects';
// import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {GroupsComponent} from './groups/groups.component';
// import {CategoryComponent} from './categories/category/category.component';
// import {CategoriesComponent} from './categories/categories.component';
// import {AttributesComponent} from './attributes/attributes.component';
// import { APP_BASE_HREF } from '@angular/common';
//
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//           GroupsComponent,
//           CategoriesComponent,
//           CategoryComponent,
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
//         providers: [DataService, NavService, { provide: APP_BASE_HREF, useValue : '/' }],
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   // it(`should have as title 'app'`, async(() => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app.title).toEqual('app');
//   // }));
//   // it('should render title in a h1 tag', async(() => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.debugElement.nativeElement;
//   //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   // }));
// });
