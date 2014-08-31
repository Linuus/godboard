import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  swimlanes: DS.hasMany('swimlane', { async: true })
});
