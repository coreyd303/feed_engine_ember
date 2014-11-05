import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('index', {path: '/'});

  this.resource('groups', function() {
    this.route('show', {path: ':group_id'});
    this.route('edit', {path: ':group_id/edit'});
    this.route('create', {path: 'create'});
  });

  this.resource('users', function() {
    this.route('show', {path: ':user_id'});
    this.route('edit', {path: ':user_id/edit'});
    this.route('create', {path: 'create'});
  });

  this.resource('trips', function() {
    this.route('show', {path: ':trip_id'});
    this.route('edit', {path: 'trip_id/edit'});
    this.route('create', {path: 'create'});
  });
});

export default Router;
