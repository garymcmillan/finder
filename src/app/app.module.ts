import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

// services
import { DataService } from './shared/services/data.service';
import {NavService} from './shared/services/nav.service';

// components
import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { CategoriesComponent } from './categories/categories.component';
import { AttributesComponent } from './attributes/attributes.component';
import { CategoryComponent } from './categories/category/category.component';

// ngrx store
import {reducers} from './store/reducers/app.reducers';
import {AttributesEffects} from './store/effects/attributes.effects';
import {NavEffects} from './store/effects/nav.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// plugins
import { NouisliderModule } from 'ng2-nouislider';

// pipes
import {ObjectToArrayPipe, ObjectToArrayWithKeysPipe} from './pipes/object-to-array.pipe';
import {TruncatePipe} from './pipes/truncate.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    CategoriesComponent,
    AttributesComponent,
    CategoryComponent,
    ObjectToArrayPipe,
    ObjectToArrayWithKeysPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NouisliderModule,
    NgxSpinnerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AttributesEffects, NavEffects]),
    StoreDevtoolsModule.instrument({
        maxAge: 5
    })
  ],
  providers: [DataService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
