import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('trip', {
      name: ''
    });
  },

  actions: {
    create: function() {
    var my_model = this.controller.get('model');
    my_model.save();
    this.transitionTo('trips.show', my_model);
    }
  }
});
