import DS from 'ember-data';

export default DS.Model.extend({
  insta_id: DS.attr('integer'),
  user_id: DS.attr('integer'),
  insta_url: DS.attr('string'),
  thumbnail_url: DS.attr('string'),
  full_size_url: DS.attr('string'),
  user: DS.belongsTo('user')
});
