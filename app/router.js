import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GodboardENV.locationType
});

Router.map(function() {
  this.resource('boards', function() {
    this.route('new');
  });
  this.resource('board', { path: 'boards/:board_id' }, function() {
    this.resource('cards', function() {
      this.route('new');
    });
  });
});

export default Router;
