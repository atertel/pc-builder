'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('parts-guide', {
      url: '/parts-guide',
      template: '<parts-guide></parts-guide>'
    });
}
