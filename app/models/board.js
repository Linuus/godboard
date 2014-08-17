import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr('string'),
  repo_name: DS.attr('string')
});
