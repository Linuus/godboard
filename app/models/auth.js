import Ember from 'ember';

export default Ember.Object.extend({
  authed: false,
  currentUser: null,
  init: function() {
    var Ref = new window.Firebase(window.GodboardENV.APP.firebase_instance_url);
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, githubUser) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (githubUser) {
        this.set('authed', true);
        this.set('currentUser', githubUser);
      } else {
        this.set('authed', false);
        this.set('currentUser', null);
      }
    }.bind(this));
  },

  login: function() {
    this.authClient.login('github', {scope: "repo,user:email"});
  },

  logout: function() {
    this.authClient.logout();
  }
});
