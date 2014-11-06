import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    delete: function() {
    this.controller.get('model').destroyRecord();
    this.transitionTo('users.index');
    }
  }
});
