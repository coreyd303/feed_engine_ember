import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  trip_location: DS.attr('string'),
  date: DS.attr('date'),
  users: DS.hasMany('user')
});
