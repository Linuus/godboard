import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['board'],
  board: Ember.computed.alias('controllers.board'),
  newCard: function() {
    return this.store.createRecord('card');
  }.property(),
  actions: {
    createCard: function() {
      var board = this.get('board.model');
      var card = this.get('newCard');
      var self = this;

      card.set('board', board);
      board.get('cards').addObject(card);
      card.save().then(function() {
        board.save().then(function() {
          self.set('newCard', self.store.createRecord('card'));
          self.transitionToRoute('board', board.get('id'));
        });
      });
    }
  }
});
