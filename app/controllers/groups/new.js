import Ember from 'ember';


export default Ember.ObjectController.extend({
  actions: {
    submitGroup: function() {
      var group = this.get('model');
      group.save();
      this.transitionToRoute('groups.index');
    }
  }
});
