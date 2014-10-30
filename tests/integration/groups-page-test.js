import Ember from 'ember';
import startApp from 'feedengine/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Groups Page', {
  setup: function() {
    App = startApp();
    
    var groups = [
      { id: 1, name: "Shred Nest", trip_ids: [1,2] },
      { id: 2, name: "Dirty Ghetto Kidz", trip_ids: [3] },
      { id: 3, name: "Bro-down", trip_ids: [4,5,6] }
    ];

    var trips = [
      { id: 1, name: "Pow pow bang bang", group_id: 1 },
      { id: 2, name: "Ski bums bombin", group_id: 1 },
      { id: 3, name: "Get some ice days", group_id: 2 },
      { id: 4, name: "Girl powder", group_id: 3 },
      { id: 5, name: "Andy has a frozen beard", group_id: 3 },
      { id: 6, name: "Teaching Chad to ski", group_id: 3 }
    ];

    server = new Pretender(function() {
      this.get('/api/v1/groups', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({groups: groups, trips: trips})];
      });

      this.get('/api/v1/groups/:id', function(request) {
        var group = groups.find(function(group) {
          if (group.id === parseInt(request.params.id, 10)) {
            return group;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({group: group, trips: trips})];
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

test('Should list all groups and number of associated trips', function() {
  visit('/groups').then(function() {
    equal(find('a:contains("Shred Nest (2)")').length, 1);
    equal(find('a:contains("Dirty Ghetto Kidz (1)")').length, 1);
    equal(find('a:contains("Bro-down (3)")').length, 1);
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
