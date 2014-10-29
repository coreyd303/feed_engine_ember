import Ember from 'ember';
import startApp from 'feedengine/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Groups Page', {
  setup: function() {
    App = startApp();
    var groups = [
      {
        id: 1,
        name: "Shred Nest"
      },
      {
        id: 2,
        name: "Dirty Ghetto Kidz"
      },
      {
        id: 3,
        name: "Bro-down"
      }
    ];

    server = new Pretender(function() {
      this.get('/api/groups', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({groups: groups})];
      });

      this.get('/api/groups/:id', function(request) {
        var group = groups.find(function(group) {
          if (group.id === parseInt(request.params.id, 10)) {
            return group;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({group: group})];
      });
    });

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the groups page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Groups")').then(function() {
      equal(find('h3').text(), 'Groups');
    });
  });
});

test('Should list all groups', function() {
  visit('/groups').then(function() {
    equal(find('a:contains("Shred Nest")').length, 1);
    equal(find('a:contains("Dirty Ghetto Kidz")').length, 1);
    equal(find('a:contains("Bro-down")').length, 1);
  });
});

test('Should be able to navigate to a group page', function() {
  visit('/groups').then(function() {
    click('a:contains("Shred Nest")').then(function() {
      equal(find('h4').text(), 'Shred Nest');
    });
  });
});

test('Should be able visit a group page', function() {
  visit('/groups/1').then(function() {
    equal(find('h4').text(), 'Shred Nest');
  });
});
