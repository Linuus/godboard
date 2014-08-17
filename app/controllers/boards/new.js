import Ember from 'ember';

export default Ember.Controller.extend({
  board: function() {
    return this.store.createRecord('board');
  }.property(),
  actions: {
    submitBoard: function() {
      this.get('board').save().then(function() {
        this.transitionToRoute('boards.index');
      }.bind(this));
    }
  }
});
