import Ember from 'ember';

export default Ember.ArrayController.extend({
  board: function() {
    return this.store.createRecord('board');
  }.property(),
  actions: {
    createBoard: function(repo) {
      this.store.createRecord('board', {
        owner: repo.owner.login,
        repo_name: repo.name
      }).save().then(function() {
        this.transitionToRoute('boards.index');
      }.bind(this));
    }
  }
});
