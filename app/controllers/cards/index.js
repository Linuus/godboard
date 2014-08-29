import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    deleteCard: function(card) {
      card.get('board').then(function(board) {
        board.get('cards').then(function(cards) {
          cards.removeObject(card);
          board.save();
          card.destroyRecord();
        });
      });
    }
  }
});

