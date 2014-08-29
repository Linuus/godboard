import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("https://api.github.com/user/repos?type=all&access_token=" + this.get('auth').currentUser.accessToken).then(function(data) {
      return data.filterBy('fork', false);
    });
  }
});
