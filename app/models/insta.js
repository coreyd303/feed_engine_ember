import DS from 'ember-data';

export default DS.Model.extend({
  insta_id: DS.attr('string'),
  user_id: DS.attr('string'),
  insta_url: DS.attr('string'),
  thumbnail_url: DS.attr('string'),
  full_size_url: DS.attr('string'),
  user: DS.belongsTo('user')
});
