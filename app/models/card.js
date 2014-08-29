import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  board: DS.belongsTo('board', { async: true }),
});
