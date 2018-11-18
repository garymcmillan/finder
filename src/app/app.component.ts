import {Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from './shared/services/data.service';
import { NavService } from './shared/services/nav.service';
import { Observable } from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import * as fromApp from './store/reducers/app.reducers';
import * as attributesActions from './store/actions/attributes.actions';
import * as navActions from './store/actions/nav.actions';
import * as groupsActions from './store/actions/groups.actions';
import * as categoryActions from './store/actions/category.actions';
import {ActivatedRoute, Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Attribute} from "./shared/models/attributes.model";
import {isObject} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [
        trigger('rightPanelOpen', [
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-10%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 0.1s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(-10%)'
                }))
            ])
        ])
    ]
})
export class AppComponent implements OnInit {
  categoriesState;
  attributeState;
  attributes;
  title = 'app';
  someRange;
  navState;
  rightPanelOpen: boolean;
  selectedCat;
  selectedSubCat;
  showSlider = false;
  selectedRange;
  seletedOptions: any;
  sliderConfig: any;
  DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };

    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
  }());

  constructor(
      private dataService: DataService,
      private cd: ChangeDetectorRef,
      private navService: NavService,
      private spinner: NgxSpinnerService,
      private store: Store<fromApp.AppState>,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.navState = this.store.select('nav');
    this.navState.subscribe((navState) => {
        if (navState.dataLoading) {
            this.spinner.show();
        } else {
            this.spinner.hide();
        }
    });

    this.categoriesState = this.store.select('categories');

    this.categoriesState.subscribe(
        (categoriesState) => {
            this.selectedCat = categoriesState.selectedCategory;
            this.selectedSubCat = categoriesState.selectedSubCategories;
        });
    this.attributeState = this.store.select('attributes');
      this.attributeState.subscribe(
          (attributeState) => {
              this.seletedOptions = attributeState.selectedOptions;

              if (attributeState.attributes) {
                  this.attributes = Object.assign({}, attributeState.attributes);

                  const attributesList = this.attributes;
                  for (let property in attributesList) {
                      if (attributesList.hasOwnProperty(property)) {
                          if ((attributesList[property.toString()] !== '0' && !attributesList[property.toString()]) || // integer 0
                              (attributesList[property.toString()] && !isObject(attributesList[property.toString()])) || // not an object
                              (attributesList[property.toString()] && isObject(attributesList[property.toString()]) && attributesList[property.toString()].options.length === 0)) {  // object with no options
                              delete this.attributes[property.toString()];
                          }
                      }
                  }

                  const newList = this.attributes;
                  this.attributes = Object.keys(newList).map(function(key) {
                      return [key,newList[key]];
                  });
                  this.attributes.sort(function(a,b) {return (a['1'].priority > b['1'].priority) ? 1 : ((b['1'].priority > a['1'].priority) ? -1 : 0);} );

                  this.attributes = this.attributes.slice(0,3);

                  this.someRange = [attributeState.min_price, attributeState.max_price];

                  if (attributeState.range.length) {
                      this.selectedRange = attributeState.range;
                  } else {
                      this.selectedRange = this.someRange;
                  }

                  this.showSlider = false;
                  this.cd.detectChanges();

                  if ((this.selectedRange[0] !== this.someRange[0] ||
                      this.selectedRange[1] !== this.someRange[1]) ||
                      attributeState.attributes.count > 1) {
                      this.sliderConfig = {
                          connect: true,
                          step: attributeState.increment,
                          tooltips: [true, true],
                          pageSteps: 1,
                          range: {
                              min: attributeState.min_price,
                              max: attributeState.max_price
                          },
                          start: this.selectedRange,
                          format: new this.DefaultFormatter()
                      };
                      this.showSlider = true;
                      this.cd.detectChanges();
                  }
              } else {
                  this.attributes = null;
              }
          });


    this.navService.rightPanelOpen.subscribe(
      (response) => this.rightPanelOpen = response
    );
  }

  onGetGroups() {
      if (!this.selectedCat) {
        this.dataService.fetchGroups().subscribe(
          (data) => {
          },
          (error) => console.log(error)
        );
      }
      // this.router.navigate(['/']);
      this.store.dispatch(new navActions.SetCurrentObject('group'));
      if (this.navService.rightPanelOpen.getValue() === true) {
          this.navService.toggleRightPanel();
          setTimeout(() => {
              this.navService.toggleRightPanel();
          }, 300);
      } else {
          this.navService.toggleRightPanel();

      }

      this.showScrollArrows();

  }


  goToSubCategories() {
      // this.router.navigate(['/' + this.selectedCat.catid]);
      this.store.dispatch(new navActions.SetCurrentObject('category'));
      if (this.navService.rightPanelOpen.getValue() === true) {
          this.navService.toggleRightPanel();
          setTimeout(() => {
              this.navService.toggleRightPanel();
          }, 300);
      } else {
          this.navService.toggleRightPanel();
      }

      this.showScrollArrows();
  }

  selectAttributeGroup(selectedAttribute) {
      if ((this.seletedOptions === undefined || this.seletedOptions === null) ||
          (this.seletedOptions !== undefined && !this.seletedOptions.hasOwnProperty(selectedAttribute[0]))) {
          const attribute = {name: selectedAttribute[0], obj: selectedAttribute[1]};
          this.store.dispatch(new attributesActions.SelectAttributes(attribute));

          // this.router.navigate(['/' + this.selectedCat.catid + '/' + this.selectedSubCat.catid], {relativeTo: this.route});
          this.store.dispatch(new navActions.SetCurrentObject('attribute'));
          if (this.navService.rightPanelOpen.getValue() === true) {
              this.navService.toggleRightPanel();
              setTimeout(() => {
                  this.navService.toggleRightPanel();
              }, 300);
          } else {
              this.navService.toggleRightPanel();
          }

          this.showScrollArrows();
      }
  }

  removeAttribute(attributeToRemove) {
      if (this.seletedOptions !== undefined && this.seletedOptions.hasOwnProperty(attributeToRemove[0])) {
          const attribute = {name: attributeToRemove[0], obj: attributeToRemove[1]};
          this.store.dispatch(new navActions.RemoveMappedAttribute(attributeToRemove[1]));
          this.store.dispatch(new attributesActions.RemoveOptions(attribute));
      }
  }

  rangeChanged(value) {
      this.store.dispatch(new attributesActions.Range(value));
  }

  submit() {
      this.navService.toggleRightPanel();
      this.store.dispatch(new navActions.BuildUrl());
  }

  reset() {
      this.store.dispatch(new navActions.NavReset());
      this.store.dispatch(new groupsActions.Reset());
      this.store.dispatch(new categoryActions.Reset());
      this.store.dispatch(new attributesActions.AttributeReset());
      this.router.navigate(['/']);
  }

    scrollLeft() {
        const element = document.querySelector('.scrollable');
        const left = element.scrollLeft;
        const leftArrow = document.querySelector('.scroll-arrow--left');
        const rightArrow = document.querySelector('.scroll-arrow--right');

        const scrollDist = document.querySelector('.scrollable li').clientWidth;
        const pos = (document.querySelector('.scrollable').scrollLeft + (scrollDist + 45));
        const max = document.querySelector('.scrollable').scrollWidth;

        if ((left - (scrollDist + 45)) <= 0 || left === 0) {
            leftArrow.classList.add('hide');
        } else {
            leftArrow.classList.remove('hide');
        }


        rightArrow.classList.remove('hide');


        element.scrollTo({ left: left - (scrollDist + 45), behavior: 'smooth' });



    }

    scrollRight() {
        const element = document.querySelector('.scrollable');
        const rightArrow = document.querySelector('.scroll-arrow--right');
        const leftArrow = document.querySelector('.scroll-arrow--left');
        const left = element.scrollLeft;

        const scrollDist = document.querySelector('.scrollable li').clientWidth;
        const width = document.querySelector('.scrollable').clientWidth;
        const pos = (document.querySelector('.scrollable').scrollLeft);
        const max = document.querySelector('.scrollable').scrollWidth;


        leftArrow.classList.remove('hide');


        if (pos === max || (pos + width + (scrollDist + 45) >= max)) {
            rightArrow.classList.add('hide');
        }

        element.scrollTo({ left: left + (scrollDist + 45), behavior: 'smooth' });




    }

    showScrollArrows() {
        setTimeout(() => {
            const rightArrow = document.querySelector('.scroll-arrow--right');

            if (document.querySelector('.scrollable')) {
                const max = document.querySelector('.scrollable').scrollWidth;
                const width = document.querySelector('.scrollable').clientWidth;


                if (width < max) {
                    rightArrow.classList.remove('hide');
                }
            }
        }, 1000);
    }

    isArray(obj : any ) {
        return Array.isArray(obj)
    }
}
