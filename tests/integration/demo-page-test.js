import Ember from 'ember';
import startApp from 'feedengine/tests/helpers/start-app';


var App;

module('Integration - Demo Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the Demo page', function() {
  visit('/').then(function() {
    click('a:contains("Demo")').then(function() {
      equal(find('h3').text(), 'Demo');
    });
  });
});