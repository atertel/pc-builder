'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');

import 'angular-socket-io';

const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');



import {routeConfig} from './app.config';


import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';


import './app.css';

angular.module('pcbuilderApp', [
  ngCookies,
  ngResource,
  ngSanitize,

  'btford.socket-io',

  uiRouter,
  uiBootstrap,
  navbar,
  footer,
  main,
  constants,
  socket,
  util
])
  .config(routeConfig)
;

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['pcbuilderApp'], {
      strictDi: true
    });
});

/*
import PartsModule from './parts-guide/parts-guide.component.ts';
angular.module('pcbuilderApp', [
  ...
  main,
  PartsModule,
])
  .config(routeConfig)
  .run(...);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['pcbuilderApp'], {
      strictDi: true
    });
  });
*/
