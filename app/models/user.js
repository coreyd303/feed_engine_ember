import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  instagram_username: DS.attr('string'),
  instagram_id: DS.attr('string'),
  twitter_username: DS.attr('string'),
  trips: DS.hasMany('trip'),
  instas: DS.hasMany('instas')
});
