import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { AttributesComponent } from './attributes/attributes.component';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: ':id', component: CategoriesComponent,
    children: [
      { path: '', component: CategoryComponent},
      { path: ':attribute', component: AttributesComponent}
    ]
  }
  // { path: 'quotes', component: QuotesComponent,
  //   children: [
  //     { path: '', component: QuoteListComponent },
  //     { path: ':id', component: QuoteOverviewComponent,
  //       children: [
  //         { path: ':space', component: QuoteDetailsComponent }
  //       ]
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
