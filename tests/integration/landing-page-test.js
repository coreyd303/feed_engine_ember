import Ember from 'ember';
import startApp from 'feedengine/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to Snowcial', function() {
  visit('/').then(function() {
    equal(find('h2#title').text(), 'Welcome to Snowcial');
  });
});

test('Should allow navigation back to root from another page', function() {
  visit('/demo').then(function() {
    click('a:contains("Home")').then(function() {
      equal(find('h3').text(), 'Demo');
    });
  });
});
