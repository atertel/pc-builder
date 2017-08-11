'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './parts-guide.routes';

export class PartsGuideComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('pcbuilderApp.parts-guide', [uiRouter])
  .config(routes)
  .component('partsGuide', {
    template: require('./parts-guide.html'),
    controller: PartsGuideComponent,
    controllerAs: 'partsGuideCtrl'
  })
  .name;
