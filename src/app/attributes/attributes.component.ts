import {Component, OnDestroy, OnInit} from '@angular/core';
import {Attribute, SelectedAttribute} from '../shared/models/attributes.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/reducers/app.reducers';
import {Observable} from 'rxjs/Rx';
import * as attributesActions from '../store/actions/attributes.actions';
import * as navActions from '../store/actions/nav.actions';
import {NavService} from '../shared/services/nav.service';
import * as labelActions from '../store/actions/label.actions';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit, OnDestroy {
  attributeState: any;
  labelState;
  attributeSubscription: any;
  openAttribute: SelectedAttribute;
  selectedOption: any;
  categoryAttributes: Attribute[];
  navState;
  navSubscription;
  showMe = false;

  constructor(private store: Store<fromApp.AppState>, private navService: NavService) {
      this.attributeState = this.store.select('attributes');
      this.navState = this.store.select('nav');
      this.navSubscription = this.navState.subscribe((navState) => {
          if (navState.currentObject === 'attribute') {
              this.showMe = true;
          }
      });
      this.attributeSubscription = this.attributeState.subscribe((attributes) => {
          this.categoryAttributes = attributes.categoryAttributes;
          this.openAttribute = attributes.openAttribute;

          if (attributes.selectedOptions) {
              if (!attributes.selectedOptions.hasOwnProperty(this.openAttribute.name) ||
                  Object.keys(attributes.selectedOptions).indexOf(this.openAttribute.name) !== 0) {
                  this.categoryAttributes[this.openAttribute.name] = attributes.attributes[this.openAttribute.name];
              }

              for (let property in attributes.selectedOptions) {
                  if (attributes.selectedOptions.hasOwnProperty(property)) {
                      if (this.openAttribute.name === property) {
                          this.selectedOption = attributes.selectedOptions[property].options[0].value;
                      }
                  }
              }

              this.openAttribute.obj.options = this.categoryAttributes[this.openAttribute.name].options;
          }
      });
      this.labelState = this.store.select('label');
  }

  ngOnInit() {
  }

  pushToSelectedOptions(selectedOption) {
      this.showMe = false;
    this.store.dispatch(new navActions.MapAttribute(selectedOption));
    this.navService.toggleRightPanel();
      this.store.dispatch(new navActions.SetCurrentObject(null));
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

    ngOnDestroy() {
        this.attributeSubscription.unsubscribe();
        this.showMe = false;
        this.navSubscription.unsubscribe();
    }
}
