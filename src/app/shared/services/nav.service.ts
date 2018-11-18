import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class NavService {
  rightPanelOpen  = new BehaviorSubject <boolean>(false);

  toggleRightPanel() {
    this.rightPanelOpen.next(!this.rightPanelOpen.getValue());
  }

}
