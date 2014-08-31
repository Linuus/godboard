import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deleteCard: function() {
      var card = this.get('model');
      card.get('swimlane').then(function(swimlane) {
        swimlane.get('cards').then(function(cards) {
          cards.removeObject(card);
          swimlane.save();
          card.destroyRecord();
        });
      });
    }
  }
});
