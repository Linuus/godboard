import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createBoard: function() {
      this.store.createRecord('board', {
        title: this.get('title')
      }).save().then(function() {
        this.transitionToRoute('boards.index');
      }.bind(this));
    }
  }
});
