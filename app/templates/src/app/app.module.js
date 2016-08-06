import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppConfig from './app.component.js';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Components
])
.config(AppConfig)
.component('app', AppComponent);
