import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: Ember.computed.alias('github_payload.title'),
  board: DS.belongsTo('board'),
  github_id: DS.attr('number'),
  github_payload: function() {
    var board = this.get('board');
    return Ember.$.getJSON('https://api.github.com/repos/' + board.get('owner') + '/' + board.get('repo_name')  + '/issues?state=all&per_page=1000').then(function(data) {
      for(var i=0; i<data.length; i++) {
        this.store.createRecord('card', { github_payload: data[1] });
      }
    }.bind(this));
  }.property()
});
