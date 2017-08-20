import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import angularResource from 'angular-resource';
import components from './components/components';
import services from './services/services';
import styles from './app.less';

const app = angular.module('app', [angularResource, uirouter, components, services]);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state({
    name: 'front',
    url: '',
    template: '<h1>Hello world</h1>',
  });
}]);
