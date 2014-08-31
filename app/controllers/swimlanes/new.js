import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['board'],
  board: Ember.computed.alias('controllers.board'),
  actions: {
    createSwimlane: function() {
      var board = this.get('board.model');
      var swimlane = this.store.createRecord('swimlane', this.getProperties('title'));
      swimlane.set('board', board);
      board.get('swimlanes').addObject(swimlane);
      swimlane.save().then(function() {
        board.save();
      });
    }
  }
});
