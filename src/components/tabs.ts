// 
// @description : 
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT

import {autoinject} from 'aurelia-framework';
import {UITreeOptions, UIEvent} from "../resources/index";

@autoinject()
export class CompTabs {
  constructor() {
  }

  // aurelia hooks
  canActivate(model) { return true; }
  activate(model) { return true; }
  bind(bindingContext) { }
  attached() { }
  detached() { }
  unbind() { }
  deactivate() { }
  // end aurelia hooks

}