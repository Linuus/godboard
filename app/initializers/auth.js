import Ember from 'ember';

var Ref = new window.Firebase('https://popping-fire-6456.firebaseio.com');

var auth = Ember.Object.extend({
  authed: false,
  init: function() {
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, githubUser) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (githubUser) {
        this.set('authed', true);
      } else {
        this.set('authed', false);
      }
    }.bind(this));
  },

  login: function() {
    this.authClient.login('github');
  },

  logout: function() {
    this.authClient.logout();
  }
});

export default {
  name: 'auth',

  initialize: function(container, app) {
    app.register('auth:main', auth, {singleton: true});
    app.inject('controller', 'auth', 'auth:main');
    app.inject('route', 'auth', 'auth:main');
  }
};
