import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo');
  this.resource('groups', function() {
    this.route('show', {path: ':group_id'});

  this.resource('trips', function() {
    this.route('show', {path: 'trip_id'});
  });
  
  });
});

export default Router;