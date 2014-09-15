import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['swimlane'],
  swimlane: Ember.computed.alias('controllers.swimlane'),
  actions: {
    createCard: function() {
      console.log("Create card");
      var card = this.store.createRecord('card', this.getProperties('body'));
      var swimlane = this.parentController.get('model');

      card.set('swimlane', swimlane);
      swimlane.get('cards').addObject(card);
      card.save().then(function() {
        swimlane.save();
      });
    }
  }
});
