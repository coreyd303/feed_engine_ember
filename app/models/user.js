import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password_digest: DS.attr('string'),
  instagram_username: DS.attr('string'),
  instagram_id: DS.attr('string'),
  twitter_username: DS.attr('string'),
  epic_mix_username: DS.attr('string'),
  epic_mix_password: DS.attr('string'),
  trips: DS.hasMany('trip'),
  groups: DS.hasMany('group')
});
