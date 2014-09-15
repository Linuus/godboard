import Ember from 'ember';

export default Ember.Component.extend({
  _initializeSwimlane: function() {
  }.on('didInsertElement'),
  cards: function() {
    this.get('swimlane.cards');
  }.property(),

  actions: {
    deleteSwimlane: function() {
      this.sendAction('deleteAction');
    }
  }
});
