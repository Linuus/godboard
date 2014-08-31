import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['board'],
  board: Ember.computed.alias('controllers.board'),
  actions: {
    deleteSwimlane: function() {
      var swimlane = this.get('model');
      var board = this.get('board.model');
      board.get('swimlanes').then(function(swimlanes) {
        swimlanes.removeObject(swimlane);
        board.save();
        swimlane.destroyRecord();
      });
    }
  }
});
